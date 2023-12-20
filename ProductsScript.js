let totalQuantity = 0;
  let totalPrice = 0;

  function addToCart(shoeId, price) {
    totalQuantity++;
    totalPrice += price;
    updateCartSummary();
  }

  function updateCartSummary() {
    document.getElementById("total-quantity").textContent = totalQuantity;
    document.getElementById("total-price").textContent = "ETB " + totalPrice;
  }

  function goToPayment() {
    // Redirect to the payment page (replace 'payment.html' with your actual payment page)
    window.location.href = 'payment.html';
  }

  // Attach click event listeners to the "add to cart" buttons
  const addToCartButtons = document.querySelectorAll('button[id^="shoe"]');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const shoeId = this.id;
      const price = parseInt(document.querySelector(`#${shoeId}`).previousElementSibling.textContent.trim().split(' ')[1]);
      addToCart(shoeId, price);
    });
  });