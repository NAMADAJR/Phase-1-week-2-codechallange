// This is the main function that handles adding items to the shopping list.
document.addEventListener("DOMContentLoaded", function () {
  const addItemForm = document.getElementById("addItemForm");
  const itemInput = document.getElementById("itemInput");
  const shoppingList = document.getElementById("shoppingList");
  const clearListBtn = document.getElementById("clearList");

  // It takes the text of the item to be added as a parameter and creates a new list item.
  addItemForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newItemText = itemInput.value.trim();
    if (newItemText !== "") {
      addItem(newItemText);
      itemInput.value = "";
    }
  });

  // It sets the text of the list item to the item's text, adds a click event listener to toggle the completed class, and appends the list item to the shopping list.
  function addItem(itemText) {
    const li = document.createElement("li");
    li.innerText = itemText;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    shoppingList.appendChild(li);
  }

  // It clears the input field after the item has been added.
  clearListBtn.addEventListener("click", function () {
    shoppingList.innerHTML = "";
  });
});
