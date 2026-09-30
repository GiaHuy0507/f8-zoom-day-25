const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const checkAll = $("#check-all");
const checkBox = $$(".status-checkbox");
const selectCount = $("#selected-count");

// check all
checkAll.onchange = function () {
  checkBox.forEach(function (checkbox) {
    checkbox.checked = checkAll.checked;
  });

  updateCount();
};

// checkbox con
checkBox.forEach(function (checkbox) {
  checkbox.onchange = function () {
    updateCount();
  };
});

// Cập nhật số checkbox được check
// + cập nhật trạng thái checkbox chính
function updateCount() {
  const checkedCount = $$(".status-checkbox:checked").length;

  selectCount.textContent = checkedCount;

  if (checkedCount === 0) {
    checkAll.checked = false;
    checkAll.indeterminate = false;
  } else if (checkedCount === checkBox.length) {
    checkAll.checked = true;
    checkAll.indeterminate = false;
  } else {
    checkAll.checked = false;
    checkAll.indeterminate = true;
  }
}
