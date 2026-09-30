// function activeTab(index) {
//   // Bỏ active tất cả tab
//   tabItems.forEach(function (tab) {
//     tab.classList.remove("active");
//   });

//   // Bỏ active tất cả content
//   tabContents.forEach(function (content) {
//     content.classList.remove("active");
//   });

//   // Active tab được chọn
//   tabItems[index].classList.add("active");

//   // Active content tương ứng
//   tabContents[index].classList.add("active");
// }

// // Click vào tab
// tabItems.forEach(function (tab, index) {
//   tab.onclick = function () {
//     activeTab(index);
//   };
// });

// // Nhấn số trên bàn phím
// document.onkeydown = function (event) {
//   const number = Number(event.key);

//   const index = number - 1;

//   if (index >= 0 && index < tabItems.length) {
//     activeTab(index);
//   }
// };

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$(".tab-item");
const tabContents = $$(".tab-content");
