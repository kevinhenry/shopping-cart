/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
let cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  let selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    // option.value = Product.allProducts[i].name;
    option.setAttribute('value', Product.allProducts[i].name)
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  // console.log(event.target);
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // DONE: suss out the item picked from the select list
  let item = document.getElementById('items').value;
  console.log(item);
  // DONE: get the quantity
  let quantity = +document.getElementById('quantity').value;
  console.log(quantity);
  // DONE: using those, add one item to the Cart
  cart.addItem(item, quantity); // Ryan - this isn't done!!!!!!
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // one way
  document.getElementById('itemCount').textContent = `:  ${cart.items.length} item(s) in cart`;
  // another more detailed way
  // let count = 0;
  // for (let i in cart.items){
  //   count += cart.items[i].quantity;
  // }
  // document.getElementById('itemCount').textContent = `:  ${count} item(s) in cart`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let item = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;

  // TODO: Add a new element to the cartContents div with that information
  for (let i = 0; i < cart.length; i++){
    let itemElement = document.createElement('p');
    itemElement.textContent = cart[i].item;
    item.apppendChild(itemElement);
  }
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
let catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
