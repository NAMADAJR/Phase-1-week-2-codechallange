document.addEventListener("DOMContentLoaded", function () {
  const addItemForm = document.getElementById("addItemForm");
  const itemInput = document.getElementById("itemInput");
  const shoppingList = document.getElementById("shoppingList");
  const clearListBtn = document.getElementById("clearList");

  addItemForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newItemText = itemInput.value.trim();
    if (newItemText !== "") {
      addItem(newItemText);
      itemInput.value = "";
    }
  });

  function addItem(itemText) {
    const li = document.createElement("li");
    li.innerText = itemText;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    shoppingList.appendChild(li);
  }

  clearListBtn.addEventListener("click", function () {
    shoppingList.innerHTML = "";
  });
});
