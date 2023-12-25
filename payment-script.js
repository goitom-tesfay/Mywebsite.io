document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const totalQuantity = urlParams.get('totalQuantity');
  const totalPrice = urlParams.get('totalPrice');

  // Display order details
  document.getElementById('quantity').textContent = totalQuantity;
  document.getElementById('total-price').textContent = `ETB ${totalPrice}`;
});

function contact() {
  // Retrieve user input
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  // Display a confirmation message (you can customize this part)
  alert(`Thank you, ${name}! Your order has been placed. We will contact you at ${+251901970788}.`);
}