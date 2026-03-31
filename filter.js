let products = [
{name:"Running Shoes",price:1999},
{name:"Smart Watch",price:2999},
{name:"Headphones",price:1499},
{name:"Laptop",price:55000}
];

document.getElementById("searchInput").addEventListener("keyup", function(){

let search = this.value.toLowerCase();

let results = document.getElementById("searchResults");

results.innerHTML = "";

products.forEach(function(product){

if(product.name.toLowerCase().includes(search)){

let div = document.createElement("div");

div.innerHTML = product.name + " - ₹" + product.price;

results.appendChild(div);

}

});

});