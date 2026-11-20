// 1. Menu Data
const menuItems = [
  { id: 1, name: "Classic Espresso", category: "coffee", price: 120, desc: "Rich, bold single-origin espresso shot." },
  { id: 2, name: "Cappuccino", category: "coffee", price: 160, desc: "Espresso topped with velvety steamed milk foam." },
  { id: 3, name: "Iced Caramel Latte", category: "coffee", price: 190, desc: "Chilled espresso, milk, and sweet caramel drizzle." },
  { id: 4, name: "Masala Chai", category: "tea", price: 80, desc: "Traditional spiced Indian tea brewed with ginger & cardamom." },
  { id: 5, name: "Matcha Green Tea", category: "tea", price: 180, desc: "Ceremonial grade Japanese matcha whisked with milk." },
  { id: 6, name: "Butter Croissant", category: "pastry", price: 130, desc: "Flaky, golden-baked French pastry." },
  { id: 7, name: "Chocolate Muffin", category: "pastry", price: 110, desc: "Soft double-chocolate chip muffin." }
];

let cartCount = 0;
let cartTotal = 0;

const menuContainer = document.getElementById("menu-container");

// 2. Render Menu Items
function displayMenu(items) {
  menuContainer.innerHTML = items.map(item => `
    <div class="menu-card">
      <div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
      <div class="card-footer">
        <span class="price">₹${item.price}</span>
        <button class="add-btn" onclick="addToOrder(${item.price})">+ Add</button>
      </div>
    </div>
  `).join("");
}

// 3. Filter Function
function filterMenu(category, btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  if (category === "all") {
    displayMenu(menuItems);
  } else {
    const filtered = menuItems.filter(item => item.category === category);
    displayMenu(filtered);
  }
}

// 4. Order Calculation Functions
function addToOrder(price) {
  cartCount++;
  cartTotal += price;
  updateOrderBar();
}

function clearOrder() {
  cartCount = 0;
  cartTotal = 0;
  updateOrderBar();
}

function updateOrderBar() {
  document.getElementById("item-count").textContent = cartCount;
  document.getElementById("total-price").textContent = cartTotal;
}

// Load all items on startup
displayMenu(menuItems);
