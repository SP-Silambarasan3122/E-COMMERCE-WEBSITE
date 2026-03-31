let images = [
"images/slide1.jpg",
"images/slide2.jpg",
"images/slide3.jpg"
];

let index = 0;

function changeSlide(){

index++;

if(index >= images.length){
index = 0;
}

document.getElementById("slide-image").src = images[index];

}

setInterval(changeSlide,3000);
function addToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name: name,
price: price
});

localStorage.setItem("cart", JSON.stringify(cart));

alert("Product added to cart!");

}
function searchProducts(){

let input = document.getElementById("searchInput").value.toLowerCase();

let products = document.querySelectorAll(".product-card");

products.forEach(function(product){

let name = product.querySelector("h3").innerText.toLowerCase();

if(name.includes(input)){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

}
function searchProducts(){

let input = document.getElementById("searchInput").value.toLowerCase();

let products = document.querySelectorAll(".product-card");

products.forEach(function(product){

let name = product.querySelector("h3").innerText.toLowerCase();

if(name.includes(input)){
product.style.display = "block";
}else{
product.style.display = "none";
}

});

}