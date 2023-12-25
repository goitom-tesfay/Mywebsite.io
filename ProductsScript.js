let totalQuantity = 0;
let totalPrice = 0;

function addToCart(buttonId, price) {
  const addButton = document.getElementById(buttonId);

  // Increment quantity and update total price
  totalQuantity++;
  totalPrice += price;

  // Update cart summary
  document.getElementById('total-quantity').textContent = totalQuantity;
  document.getElementById('total-price').textContent = `ETB ${totalPrice}`;

  // Disable the button after adding to cart
  addButton.disabled = true;
}

function goToPayment() {
  // Set values in URL parameters
  const paymentUrl = `payment.html?totalQuantity=${totalQuantity}&totalPrice=${totalPrice}`;
  
  // Redirect to payment page
  window.location.href = paymentUrl;
}