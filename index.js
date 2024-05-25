/*const newInputElement = document.createElement("input");
newInputElement.type = "text";
newInputElement.placeholder = "Fruit Description . . .";
newInputElement.id = "description";
newInputElement.name = "description";

const form = document.querySelector("form");
const button = document.querySelector("button");
form.insertBefore(newInputElement, button);


// Show the fruit description in italics on the next line



const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newInput = document.getElementById("fruit-to-add");
  const newInput2 = document.getElementById("description");

  const p_Tag = document.createElement("p");
  const p_TagText = document.createTextNode(newInput2.value);
  p_Tag.style = "font-style: italic";
  p_Tag.appendChild(p_TagText);

  const newLi = document.createElement("li");
  const newLiText = document.createTextNode(newInput.value);
  newLi.appendChild(newLiText);
  newLi.appendChild(p_Tag);
  newLi.className = "fruit";

  const newDelete = document.createElement("button");
  const newDeleteText = document.createTextNode("x");
  newDelete.appendChild(newDeleteText);
  newDelete.className = "delete-btn";
  newLi.appendChild(newDelete);
  fruits.appendChild(newLi);
});

fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});
// Create a filter that shows only those fruits whose either name or description or both matches the entered text
document.getElementById("filter").addEventListener("keyup", function (event) {
  const searchTerm = event.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".fruits li");
  for (let i = 0; i < listItems.length; i++) {
    const currentFruitText = listItems[i].firstChild.textContent.toLowerCase();
    const currentFruitDescription =
      listItems[i].firstElementChild.firstChild.textContent.toLowerCase();
    if (
      currentFruitText.indexOf(searchTerm) === -1 &&
      currentFruitDescription.includes(searchTerm) === false
    ) {
      listItems[i].style.display = "none";
    } else {
      listItems[i].style.display = "flex";
    }
  }
});*/

const deleteBtn = document.querySelectorAll(".delete-btn");
const p_apple = document.createElement("p");
p_apple.innerHTML = "<br/>The apple is one of the pome (fleshy) fruits.";
p_apple.style.fontStyle = "italic";
deleteBtn[1].before(p_apple);

//const deleteBtn =document.querySelectorAll('.delete-btn');
const p_banana = document.createElement("p");
p_banana.innerHTML =
  "<br/>A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.";
p_banana.style.fontStyle = "italic";
deleteBtn[0].before(p_banana);

const p_orange = document.createElement("p");
p_orange.innerHTML =
  "<br/>Oranges are citrus fruits with fragrant, leathery skin and juicy flesh.";
p_orange.style.fontStyle = "italic";
deleteBtn[2].before(p_orange);

// Add input element inside form, before button, to take fruit description
const p_kiwi = document.createElement("p");
p_kiwi.innerHTML = "<br/>a true berry and has furry brownish green skin.";
p_kiwi.style.fontStyle = "italic";
deleteBtn[3].before(p_kiwi);

const input = document.getElementById("fruit-to-add");
const newInput = document.createElement("input");
newInput.type = "text";
newInput.id = "description";
input.placeholder = "Fruit...";
newInput.placeholder = "Fruit Description . . .";
input.after(newInput);
newInput.style.fontStyle = "italic";

// Show the fruit description in italics on the next line

const form = document.getElementsByTagName("form");
const fruits = document.querySelector(".fruits");
form[0].addEventListener("submit", function (event) {
  event.preventDefault();
  
  const newLi = document.createElement("li");
  newLi.className = "fruit";
  newLi.innerHTML=event.target.fruit.value + `<p style="font-style: italic;"><br> ${event.target.description.value}</p>`+`<button class="delete-btn">x</button>`;
  fruits.appendChild(newLi);
  //console.log(event.target.children[0].classList);
});
const ul= document.querySelector('ul');

ul.addEventListener('click', function(event){
if(event.target.className==deleteBtn[0].className){
  event.target.parentElement.remove();
}

})


// Create a filter that shows only those fruits whose either name or description or both matches the entered text

document.getElementById("filter").addEventListener("keyup", function (event){
  //console.log(event.target.value)
  const searchTerm = event.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".fruits li");
  for (let i = 0; i < listItems.length; i++) {
    const currentFruitText = listItems[i].firstChild.textContent.toLowerCase();
    const currentFruitDescription =
      listItems[i].firstElementChild.firstChild.textContent.toLowerCase();
    if (
      currentFruitText.indexOf(searchTerm) === -1 &&
      currentFruitDescription.includes(searchTerm) === false
    ) {
      listItems[i].style.display = "none";
    } else {
      listItems[i].style.display = "flex";
    }
  }
})