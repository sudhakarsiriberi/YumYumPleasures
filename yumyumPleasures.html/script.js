let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');

   
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    menuitems.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');

    searchForm.classList.remove('active');
    loginform.classList.remove('active');
    menuitems.classList.remove('active');

}


let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginform.classList.toggle('active');

    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    menuitems.classList.remove('active');
}


let menuitems = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    menuitems.classList.toggle('active');

    loginform.classList.remove('active');  
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}



window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    menuitems.classList.remove('active');
}



var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });




  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });





















  document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var loginUsername = document.getElementById("login-username").value;
    var loginPassword = document.getElementById("login-password").value;

    var regUsername = localStorage.getItem("regUsername");
    var regPassword = localStorage.getItem("regPassword");

    if (loginUsername === regUsername && loginPassword === regPassword) {
      function function3() { 
        swal("Success!", "Your data have been saved. Thank you!", "success");
      }
      function3()
      window.location.href = "index2.html";
    } else {
      swal("Failed!", "Your password doesn't match. Thank you!", "error");
    }
});







var regUsername = localStorage.getItem("regUsername");
var regEmail = localStorage.getItem("regEmail");
var regAddress = localStorage.getItem("regAddress");

if (regUsername) {
    document.getElementById("profile-username").textContent = regUsername;
    document.getElementById("profile-email").textContent = regEmail;
    document.getElementById("profile-address").textContent = regAddress;
} else {
    alert("User data not found. Please register and log in.");
    window.location.href = "registration.html";
}











document.addEventListener("DOMContentLoaded", function() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const checkoutButton = document.getElementById("checkout-btn");

  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  let cart = [];
  
  addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
      const name = button.getAttribute("data-name");
      const price = parseFloat(button.getAttribute("data-price"));
      const img = button.getAttribute("data-img");
      cart.push({ name, price, img });
      updateCart();
    });
  });

  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const listItem = document.createElement("li");

      listItem.classList.add("cart-item");

      const itemImage = document.createElement("img");
      itemImage.src = item.img;
      itemImage.alt = item.name;
      listItem.appendChild(itemImage);

      
      listItem.innerHTML += `<h3>${item.name} - ₹${item.price.toFixed(2)}</h3>`;

      // Add a delete icon
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fas", "fa-trash-alt");
      deleteIcon.style.fontSize = "24px";
      deleteIcon.style.float = "right";

      deleteIcon.addEventListener("click", () => removeItemFromCart(index));
      listItem.appendChild(deleteIcon);

      cartItems.appendChild(listItem);
      total += item.price;
    });

    cartTotal.textContent = ` ₹${total.toFixed(2)}`;
  }

  function removeItemFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }

  updateCart();

  checkoutButton.addEventListener("click", function() {
    // Store cart data in local storage
    localStorage.setItem("shoppingCart", JSON.stringify(cart));

    // Redirect to the payment page
    window.location.href = "payment.html";
  });
  
});



