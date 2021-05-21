/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
// function clearCart() {
//   $("#cart").remove();
// }

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
    const body = document.getElementById("table");
    const tbody = document.getElementsByTagName('tbody')[0]; 
    // let delete = document.querySelector('');
    tbody.innerHTML = ''
 // DONE: Iterate over the items in the cart

   for (let i = 0; i < cart.items.length; i++){
 // DONE: Create a TR
     const tr = document.createElement("tr");
     tbody.appendChild(tr);

 // DONE: Create a TD for the delete link, quantity,  and the item
     const nameTd = document.createElement('td');
     nameTd.textContent = `${cart.removeItem}`; 
     tr.appendChild(nameTd);
     nameTd.addEventListener('click', removeItemFromCart);
     
     const nameTd2 = document.createElement('td');
     nameTd2.textContent = `${cart.items[i].quantity}`; 
     tr.appendChild(nameTd2);
     
     const nameTd3 = document.createElement('td');
     nameTd3.textContent = `${cart.items[i].product}`; 
     tr.appendChild(nameTd3);
    }
    
  }
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

     
     function removeItemFromCart(event) {
       
       // When a delete link is clicked, use cart.removeItem to remove the correct item
       
       // DONE: Save the cart back to local storage
       cart.saveToLocalStorage();
       // TODO: Re-draw the cart table
       showCart();
      }
       
// This will initialize the page and draw the cart on screen

renderCart();
