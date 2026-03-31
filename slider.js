let images = [
"images/slide1.jpg",
"images/slide2.jpg",
"images/slide3.jpg"
];

let index = 0;

function autoSlide(){

index++;

if(index >= images.length){
index = 0;
}

document.getElementById("slide-image").src = images[index];

}

setInterval(autoSlide,3000);