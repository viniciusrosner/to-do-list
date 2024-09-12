const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  if (inputBox.value === "") {
    alert("Please write something.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

const checkAll = document.getElementById("check-all");
const uncheckAll = document.getElementById("uncheck-all");
const deleteAllDone = document.getElementById("delete-all-done");
const clearAll = document.getElementById("clear-all");

checkAll.addEventListener("click", function (e) {
  listContainer.remove(li);
});

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const loadData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

loadData();
