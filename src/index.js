const h1 = document.querySelector(".wiki-item");
const newList = document.createElement("h1");
newList.textContent = "Akita";
newList.classList.add("wiki-header");
h1.appendChild(newList);

let img = document.createElement("img");
img.src = "https://images.dog.ceo/breeds/akita/Akita_Dog.jpg";
img.style.border = "10px solid orange";
img.style.borderRadius = "10px";
document.body.appendChild(img);

const div = document.querySelector(".wiki-item");
const newListItem = document.createElement("h2");
newListItem.textContent =
  "The Akita is a bold and willful dog, naturally wary of strangers but extremely loyal to their family. They are alert, intelligent, and courageous. They tend to be aggressive toward other dogs, especially those of the same sex. ... With family, the Akita is affectionate and playful.";
newListItem.classList.add("wiki-content");
div.appendChild(newListItem);

const p = document.querySelector(".wiki-content");
const newLine = document.createElement("p");
newLine.classList.add("wiki-text");
newLine.textContent =
  "Akitas are burly, heavy-boned spitz-type dogs of imposing stature. Standing 24 to 28 inches at the shoulder, Akitas have a dense coat that comes in several colors, including white. The head is broad and massive, and is balanced in the rear by a full, curled-over tail. ";
p.appendChild(newLine);

const div1 = document.querySelector(".wiki-content");
const newLiner = document.createElement("div");
newLiner.classList.add("img-container");
div1.appendChild(newLiner);

const img1 = document.querySelector(".img-container");
const newLinerr = document.createElement("img");
newLinerr.classList.add("wiki-img");
img1.appendChild(newLinerr);
