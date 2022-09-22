// iodentify list node
const theList = document.querySelector("#tasks");
// identify form
const submitForm = document.querySelector("#create-task-form");
// add listener for submit
submitForm.addEventListener("submit", dontSubmit, false);
// setup counter for task identifiers
let taskIdNumber = 0;

//what to do when submit happens
function dontSubmit(event) {
  // don't allow form to actually submit
  event.preventDefault();
  // create child element
  const newItem = document.createElement("li");
  // identify textbox
  const theBox = document.querySelector("#new-task-description");
  // put text from box in new list item, add task id & clear the textbox
  newItem.textContent = theBox.value;
  newItem.id = `task${++taskIdNumber}`;
  newItem.onclick = function () { this.remove() };
  newItem.onmouseover = function () { this.style.color = "red" };
  newItem.onmouseout = function () { this.style.color = "black" };
  theBox.value = null;
  // place element in the list
  theList.appendChild(newItem);

  // add listeners for mouseover and click?
  // newItem.addEventListener("mouseover", alert("hey")); // this doesn't work. it does the alert as soon as you submit the item!
}
