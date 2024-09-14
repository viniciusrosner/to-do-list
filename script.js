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
const deleteAll = document.getElementById("delete-all");



deleteAllDone.addEventListener("click", () => {
  let e = document.getElementsByClassName("checked")
  while (e.length > 0) {
    e[0].parentNode.removeChild(e[0]);
  }
});





deleteAll.addEventListener("click", () => {
  const e = document.getElementById("list-container");
  e.innerHTML = "";
  saveData();
})






const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const loadData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

loadData();
