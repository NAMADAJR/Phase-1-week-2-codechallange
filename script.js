// Array to store shopping list items
let shoppingItems = [];

// Function to render shopping list items
function renderItems() {
    const list = document.getElementById("shoppingList");
    list.innerHTML = ""; // Clear previous list items

  shoppingItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.name;

    // Add class if item is marked as completed
    if (item.completed) {
      listItem.classList.add("completed");
    }

    // Toggle completed status on click
    listItem.addEventListener("click", () => {
      item.completed = !item.completed;
      renderItems(); // Update UI
    });

    list.appendChild(listItem);
  });
}

// Function to add item to shopping list
function addItem() {
  const itemInput = document.getElementById("itemInput");
  const itemName = itemInput.value.trim();

  if (itemName !== "") {
    shoppingItems.push({ name: itemName, completed: false });
    renderItems(); // Update UI
    itemInput.value = ""; // Clear input field
  }
}

// Function to clear all items from the list
function clearList() {
  shoppingItems = [];
  renderItems(); // Update UI
}

// Event listeners
document.getElementById("addItem").addEventListener("click", addItem);
document.getElementById("clearList").addEventListener("click", clearList);


