/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    const opElem = document.createElement('option');
    opElem.textContent = `${Product.allProducts[i].name}`;
    selectElement.appendChild(opElem);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  const name = event.target.items.value;
  const quantity = event.target.quantity.value;
  // Do all the things ...
  addSelectedItemToCart(name, quantity);
  cart.saveToLocalStorage();
  updateCounter(quantity);
  updateCartPreview(name, quantity);
}

function addSelectedItemToCart(name, quantity) {
  cart.addItem(name, quantity);
  console.log(name, quantity);
  // TODO: Add the selected item and quantity to the cart
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter(quantity) {
  // let total = sum(sum(x,quantity)[0],quantity)[0];
  const counterElem = document.getElementById('itemCount');
  counterElem.innerHTML = '';
  const liElem = document.createElement('li');
  liElem.textContent = quantity;
  counterElem.appendChild(liElem);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(name, quantity) {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  const cartElem = document.getElementById('cartContents');
  const cartUlElem = document.createElement('ul')
  cartElem.appendChild(cartUlElem);
  const cartLiElem = document.createElement('li');
  cartLiElem.textContent = `${name} ${quantity}`;
  cartUlElem.appendChild(cartLiElem);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
