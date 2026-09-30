const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$(".tab-item");
const tabContents = $$(".tab-content");

tabItems.forEach(function (tab, index) {
  tab.onclick = function () {
    activeTab(index);
  };
});

function activeTab(index) {
  // Bỏ active ở tabs
  tabItems.forEach(function (tab) {
    tab.classList.remove("active");
  });
  // Bỏ active ở content
  tabContents.forEach(function (content) {
    content.classList.remove("active");
  });

  tabItems[index].classList.add("active");

  tabContents[index].classList.add("active");
}

// Nhấn số thì active
document.onkeydown = function (e) {
  const number = Number(e.key);
  const index = number - 1;
  if (index >= 0 && index <= tabItems.length) {
    activeTab(index);
  }
};
