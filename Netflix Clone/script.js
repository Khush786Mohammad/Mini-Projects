const language = document.querySelector('.language-navigation');
const lang = document.querySelector('.languages');
const langEnglish = document.querySelector("#lang-eng");
const langHindi = document.querySelector('#lang-hindi');
const currLanguage = document.querySelector("#curr-lang");
const questionBlock1 = document.querySelector(".questionBlock-1");
const plusSign = document.querySelector(".plusSign");
const body = document.querySelector("body");
const description = document.querySelector('.description');
const desc1 = document.querySelector(".desc-1");
const desc2 = document.querySelector(".desc-2");

document.body.addEventListener('click' , ()=>{
    console.log("body");
    // lang.classList.add("hideLanguage");
})
language.addEventListener('click', ()=>{
    console.log('clickhua');
    // lang.classList.add("showLanguage");
    // lang.classList.remove("showLanguage");
    lang.classList.toggle("show");
});

langEnglish.addEventListener('click' , ()=>{
    console.log('english');
    currLanguage.textContent = 'English';
});

langHindi.addEventListener('click' , ()=> {
    console.log('hindi');
    currLanguage.textContent = 'हिंदी';
    currLanguage.setAttribute("style","font-size: 0.9rem;");
});

questionBlock1.addEventListener('click' , ()=> {
    plusSign.classList.toggle('rotatePlus');
})

function functionShow(dsc){
    dsc.classList.toggle('show');
}

function showDescription1() {
    // Code to show the description
    description.classList.toggle('hide');
    
    functionShow(desc1);
}

function showDescription2() {
    // Code to show the description
    // description.classList.toggle('hide');
    
    functionShow(desc2);
}