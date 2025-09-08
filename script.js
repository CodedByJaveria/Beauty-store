const newsletterForm = document.querySelector(".newsletter-form");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = newsletterForm.querySelector("input[type='email']");
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("❌ Please enter a valid email address!");
    emailInput.focus();
    return;
  }
  alert("🎉 Thank you for subscribing! You’ll get updates & exclusive deals.");
  newsletterForm.reset();
});
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");

document.querySelectorAll(".cart-btn, .deal-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
    alert("✔ Added to cart!");
  });
});

// 🔍 Search Bar Logic
function searchProduct() {
  const query = document.getElementById("search").value.toLowerCase();
  const products = document.querySelectorAll(".product-card h3");
  let found = false;

  products.forEach((product) => {
    if (product.textContent.toLowerCase().includes(query)) {
      product.closest(".product-card").style.display = "block";
      found = true;
    } else {
      product.closest(".product-card").style.display = "none";
    }
  });

  if (!found) {
    alert("⚠ No products found!");
  }
}
// 🖤 Wishlist Logic
let wishlistCount = 0;
const wishlistCountElement = document.getElementById("wishlist-count");
const wishlist = [];

document.querySelectorAll(".wishlist-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product-card");
    const productName = productCard.querySelector("h3").textContent;

    if (!wishlist.includes(productName)) {
      wishlist.push(productName);
      wishlistCount++;
      wishlistCountElement.textContent = wishlistCount;
      alert(`❤️ "${productName}" added to wishlist!`);
    } else {
      alert(`⚠ "${productName}" is already in wishlist!`);
    }
  });
});
