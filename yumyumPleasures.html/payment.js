document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const paymentForm = document.getElementById("payment-form");
  
    // Fetch cart data from local storage
    const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
  
    // Display cart items and total price
    function displayCart() {
      cartItems.innerHTML = "";
      let total = 0;
  
      cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ₹ ${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
      });
  
      totalPrice.textContent = `₹ ${total.toFixed(2)}`;
    }
  
    displayCart();
  
    // Handle the payment form submission
    paymentForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const userName = document.getElementById("name").value;
      const cardHolderName = document.getElementById("card-holder-name").value;
      const cardNumber = document.getElementById("card-number").value;
      const address = document.getElementById("address").value;
      const paymentMode = document.getElementById("payment-mode").value;
  
      // You can integrate with a payment gateway here and pass the necessary data
  
      // For this example, we'll just display an alert
      alert(`Payment successful for ${userName} with card ending in ${cardNumber} via ${paymentMode}`);
  
      // Clear the cart and redirect back to the product page (you can customize this part)
      localStorage.removeItem("shoppingCart");
      window.location.href = "index2.html"; // Replace with your product page URL
    });
});

  











  