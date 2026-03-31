let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cart-items");

let total = 0;

cart.forEach(function(item){

let div = document.createElement("div");

div.innerHTML = item.name + " - ₹" + item.price;

cartContainer.appendChild(div);

total += item.price;

});

document.getElementById("total").innerText = "Total: ₹" + total;
function removeItem(index){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

location.reload();

}
<button onclick="removeItem(${index})">Remove</button>