const imgEl=document.querySelector('.image');

window.addEventListener('scroll',()=>{
    updateZoom()
})

function updateZoom(){
    imgEl.style.opacity=1- window.pageYOffset/900;
    imgEl.style.backgroundSize=200 - window.pageYOffset/24 +'%';

}