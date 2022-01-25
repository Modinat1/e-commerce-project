const images = document.getElementById("images");
const imgCounter = document.querySelectorAll("#images img");

let index = 0;
function carouselOpener(){
    if(index < imgCounter.length-1){
    index++;
    }else{
        index = 0;
    }
images.style.transform = `translateX(${-index * 600}px )`;
}
setInterval(carouselOpener, 2000);
