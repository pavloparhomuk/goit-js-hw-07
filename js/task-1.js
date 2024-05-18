// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories,
//     тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories
// знайде й виведе в консоль текст заголовка елемента(тегу < h2 >)
// і кількість елементів у категорії(усіх < li >, вкладених у нього).

const liItems = document.getElementById(`categories`).children.length;
console.log(`Number of categories: ${liItems}`);
const elCategory = document.querySelectorAll(`h2`);
elCategory.forEach(item => {
  console.log(`Category:`, item.textContent);
  console.log(`Elements:`, item.nextElementSibling.children.length);
});
