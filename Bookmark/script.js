const booking = document.querySelector(".simple-booking");
const searching = document.querySelector(".Speedy-Searching");
const easyBooking = document.querySelector(".easy-sharing");

const featureOneClass = document.querySelectorAll(".featureOneClass");
const featureTwoClass = document.querySelectorAll(".featureTwoClass");
const featureThreeClass = document.querySelectorAll(".featureThreeClass");

const block1 = document.querySelector(".block1");
const txt1 = document.querySelector('.block1Text');

const block2 = document.querySelector(".block2");
const txt2 = document.querySelector('.block2Text');

const block3 = document.querySelector(".block3");
const txt3 = document.querySelector('.block3Text');

const block4 = document.querySelector(".block4");
const txt4 = document.querySelector('.block4Text');

const blockText = document.querySelectorAll('.blockText');

const arrowImg1 = document.querySelector('.arrowImg1');
const arrowImg2 = document.querySelector('.arrowImg2');
const arrowImg3 = document.querySelector('.arrowImg3');
const arrowImg4 = document.querySelector('.arrowImg4');

booking.addEventListener('click',function(){
    
    featureTwoClass.forEach((element)=>{
        element.style.display='none';
    });

    featureThreeClass.forEach((element)=>{
        element.style.display='none';
    });

    featureOneClass.forEach((element)=>{
        element.style.display='block';
    });
});

searching.addEventListener('click', ()=>{

    featureOneClass.forEach((element)=>{
        element.style.display='none';
    });

    featureThreeClass.forEach((element)=>{
        element.style.display='none';
    });
    
    featureTwoClass.forEach((element)=>{
    element.style.display='block';
    });

});

easyBooking.addEventListener('click', ()=>{

    featureOneClass.forEach((element)=>{
        element.style.display='none';
    });

    featureTwoClass.forEach((element)=>{
        element.style.display='none';
    });

    featureThreeClass.forEach((element)=>{
        element.style.display='block';
    });
});



block1.addEventListener('click', ()=>{
    txt1.classList.toggle('active');
    
    // Toggle the 'rotate' class on arrowImg1
    arrowImg1.classList.toggle('rotate');
});

block2.addEventListener('click', ()=>{
    console.log("yes");
    txt2.classList.toggle('active');
    arrowImg2.classList.toggle('rotate');
});

block3.addEventListener('click', ()=>{
    txt3.classList.toggle('active');
    arrowImg3.classList.toggle('rotate');
});

block4.addEventListener('click', ()=>{
    txt4.classList.toggle('active');
    arrowImg4.classList.toggle('rotate');
});