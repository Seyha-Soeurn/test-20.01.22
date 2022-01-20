//1. create div with class name "container" and append it to "body"
let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
//2. create div with class name "card" and append it to "container" div
let card = document.createElement("div");
card.className = "card";
container.appendChild(card);
//3. create div with class name "card-img" and append it to "card" div
let cardImage = document.createElement("div");
cardImage.className = "card-img";
card.appendChild(cardImage);
//4. create img tags with class name "img", use "src" attribute to display image and append it to "card-img" div
// example: sample.src = "images/example.jpg";
let image = document.createElement("img");
image.setAttribute("src", "images/example.jpg")
image.className = "img";
cardImage.appendChild(image);
//5. create div with class name "card-body" and append it to "card" div
let cardBody = document.createElement("div");
cardBody.className = "card-body";
card.appendChild(cardBody);
//6. create h2 tags with class name "card-title", textContent = "Natural in the world" and append it to "card-body" div
let cardTitle = document.createElement("h2");
cardTitle.className = "card-title";
cardTitle.textContent = "Natural in the world";
cardBody.appendChild(cardTitle);
//7. create p tags with class name "description",
let description = document.createElement("p");
description.className = "description";
description.textContent = "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid, veritatis natus accusamus quod nulla ipsam. Deserunt perferendis laboriosam delectus maxime blanditiis.";
// and then apppend it to "card-body" div
cardBody.appendChild(description)
//8. create div with class name "card-footer" and append it to "card" div
let cardFooter = document.createElement("div");
cardFooter.className = "card-footer";
card.appendChild(cardFooter);
//9. create span tags with id name "date", textContent = "14 / April / 2021" and append it to "card-footer" div 
let date = document.createElement("span");
date.id = "date";
date.textContent = "14 / April / 2021";
cardFooter.appendChild(date);
//10. create span tags with id name "author", textContent ="Ronan Ronaldo"  and append it to "card-footer" 
let author = document.createElement("span");
author.id = "author";
author.textContent = "Ronan Ronaldo";
cardFooter.appendChild(author);
