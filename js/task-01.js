const allCategories = document.querySelector("#categories");
const categories = allCategories.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);
categories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
