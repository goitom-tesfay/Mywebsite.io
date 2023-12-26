document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const totalQuantity = urlParams.get('totalQuantity');
    const totalPrice = urlParams.get('totalPrice');

    // Display order details
    const quantityElement = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');

    if (quantityElement && totalPriceElement) {
        quantityElement.textContent = totalQuantity;
        totalPriceElement.textContent = `ETB ${totalPrice}`;
    }
});

function contact() {
    // Retrieve user input
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Display alert
    alert(`Thank you, ${name}! Your order has been placed. We will contact you at ${phone}.`);

    // Send data to the server using AJAX
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost/9appsPro/Web1/website/process_form.php'; // Update with the correct server-side script
    const params = `name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}`;

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // You can handle the server's response if needed
            console.log(xhr.responseText);
        }
    };

    xhr.send(params);
}