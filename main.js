const menu = [
  { image: "./images/fastfood.jpg", name: "beef burger", price: 5.99 },
  { image: "./images/download.jpg", name: "smash burger", price: 5.99 },
  { image: "./images/onion.jpg", name: "onion burger", price: 5.99 },
  { image: "./images/bison.jpg", name: "bison burger", price: 5.99 },
  { image: "./images/wings.jpg", name: "chicken wings", price: 6.99 },
  { image: "./images/fried.jpg", name: "fried checken", price: 6.99 },
  { image: "./images/withRice.jpg", name: "chicken with rice", price: 6.99 },
  { image: "./images/shish.jpg", name: "shish taook", price: 6.99 },
  {
    image: "./images/IMG-20240521-WA0001.jpg",
    name: "fries with falvore",
    price: 4.99,
  },
  {
    image: "./images/IMG-20240521-WA0002.jpg",
    name: "fries with chicken",
    price: 4.99,
  },
  {
    image: "./images/IMG-20240521-WA0003.jpg",
    name: "fries with chees",
    price: 4.99,
  },
  {
    image: "./images/IMG-20240521-WA0004.jpg",
    name: "frensh fries",
    price: 4.99,
  },
  { image: "./BudzCafé/proxy-image.jpg", name: "americano coffe", price: 7.99 },
  { image: "./BudzCafé/Caf___Mocha.jpg", name: "Mocha coffee", price: 7.99 },
  {
    image: "./BudzCafé/easy-mocha-frappuccino-1-500x500.jpg",
    name: "frappucino coffee",
    price: 7.99,
  },
  { image: "./BudzCafé/blck.jpg", name: "black coffee", price: 7.99 },
];

const cart = [];

function displayMenu() {
  const menuSection = document.getElementById("menu-items");
  menuSection.innerHTML = ""; // Clear previous menu items if any

  menu.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "ListCard";
    menuItem.innerHTML = `<p><img src="${item.image}" id="CardsImg" ></img> ${
      item.name
    }: $${item.price.toFixed(2)}</p>
                            <button id="Addnow" onclick="addItemToCart('${
                              item.image
                            }', '${item.name}', '${
      item.price
    }')">Add to Cart</button>`;
    menuSection.appendChild(menuItem);
  });
}

function addItemToCart(image, name) {
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const selectedItem = menu.find((item) => item.name === name);
    cart.push({ image, name, price: selectedItem.price, quantity: 1 });
  }
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // Clear previous cart items if any

  let total = 0;
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} x${item.quantity}: $${(
      item.price * item.quantity
    ).toFixed(2)}`;
    cartItems.appendChild(listItem);
    total += item.price * item.quantity;
  });

  const discount = calculateDiscount(total);
  const finalTotal = total - discount;

  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("discount").textContent = discount.toFixed(2);
  document.getElementById("final-total").textContent = finalTotal.toFixed(2);
}

function calculateDiscount(total) {
  // Example discount: 10% off for orders over $20
  if (total > 20) {
    return total * 0.1;
  }
  return 0;
}

function checkout() {
  alert(
    `Thank you for your order! Your total is $${
      document.getElementById("final-total").textContent
    }`
  );
  cart.length = 0;
  displayCart();
}

document.addEventListener("DOMContentLoaded", () => {
  displayMenu();
  displayCart();
  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.addEventListener("click", checkout);
});

//fill array with the wanted data when checkbox is checked
const tables = [
  { name: "table: 00", capacity: " 5 people" },
  { name: "table: 01", capacity: " 4 people" },
  { name: "table: 02", capacity: " 2 people" },
  { name: "table: 03", capacity: " vip" },
  { name: "table: 04", capacity: " 10 people" },
];

const tableInfoDiv = document.getElementById("table-info");

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const tableName = checkbox.id.replace("table-", "");
      const selectedTable = tables.find(
        (table) => table.name === `table: ${tableName}`
      );
      if (selectedTable) {
        tableInfoDiv.innerHTML = `${selectedTable.name} - ${selectedTable.capacity}`;
      } else {
        tableInfoDiv.innerHTML = " ";
      }
    });
  });
});
//to select one checkbox in a raw

document.querySelectorAll(".myCheckbox").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      document.querySelectorAll(".myCheckbox").forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

const images = document.querySelectorAll("img");

// Loop through the NodeList of images
for (const img of images) {
  img.setAttribute("loading", "lazy");
}
