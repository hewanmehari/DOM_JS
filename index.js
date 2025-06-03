document.body.style.backgroundColor = "beige";

document.getElementById("title").style.color = "white";

document.getElementById("nav").style.display = "flex";





document.querySelectorAll("h3").forEach(h3 => {
  h3.style.textTransform = "uppercase";
});

const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.textContent = "Pineapples";
fruitList.style.display = "flex";
fruitList.style.justifyContent = "space-between";
fruitList.appendChild(newFruit);

const  fruitImages = {
  "Mangoes": "mango.jpg",
  "Bananas": "banana.jpg",
  "Water Melons": "water melons.jpg",
  "Pineapples": "pineapple.jpg"

}


const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Spinach";
vegList.style.display = "flex";
vegList.style.justifyContent = "space-between"
vegList.appendChild(newVeg);

const vegImages = {
  "Onions": "onions.jpg",
  "Tomatoes": "tomatoes.jpg",
  "Kales": "kales.jpg",
  "Spinach": "spinach.jpg"
};

document.querySelectorAll("#vegList li").forEach(li => {
  const vegName = li.firstChild.textContent.trim();
  if (vegImages[vegName]) {
    const img = document.createElement("img");
    img.src = vegImages[vegName];
    img.alt = vegName;
    img.className = "veg-image";
    li.appendChild(img);
  }

});

document.querySelectorAll("#fruList li").forEach(li => {
  const fruitName = li.firstChild.textContent.trim();
  if (fruitImages[fruitName]) {
    const img = document.createElement("img");
    img.src = fruitImages[fruitName];
    img.alt = fruitName;
    img.className = "fruit-image";
    li.appendChild(img);
  }

});

const img = document.createElement('img');


const button=document.getElementById('click-button')
button.style.padding='10px 10px 10px 10px'
button.style.background='none'
button.style.border = 'none'
button.style.backgroundColor = 'green'
button.style.borderRadius = '20px'
button.style.color = 'white'
button.style.fontSize = "20px"
button.style.cursor = 'pointer'
button.style.marginTop = "40px"
button.style.width = '250px'
button.style.height = '70px'
button.style.marginBottom = "40px"
button.addEventListener('click',()=>{
    button.style.backgroundColor='blue'
    button.textContent='Ordered'})
    button.onclick=()=>{           
    heading.textContent= 'Congrats'
    }