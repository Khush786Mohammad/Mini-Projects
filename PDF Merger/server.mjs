import express from 'express';
import path from 'path';
// Multer helps us to upload files in nodejs application
import multer from 'multer';
import { fileURLToPath } from 'url';
import PDFMerger from 'pdf-merger-js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer({ dest: 'uploads/' });
app.use('/static', express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});


app.post('/merge', upload.array('pdfs'), async (req, res, next) => {
  console.log(req.files);
  const mergePdfPaths = await mergePdfs(req.files.map(file => path.join(__dirname, file.path)))
  res.redirect(`http://localhost:3000/static/${mergePdfPaths}.pdf`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});


const mergePdfs = async (pdfPaths) => {
  const merger = new PDFMerger();
  await traverse(pdfPaths,merger);
  let d = new Date().getTime()
  await merger.save(path.join(__dirname, `public/${d}.pdf`));
  return d;
};

async function traverse(pdfPaths,merger)
{
  for(const pdfPath of pdfPaths)
  {
    await merger.add(pdfPath);
  }
  return;
}
