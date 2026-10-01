const $ = document.querySelector.bind(document);

const $$ = document.querySelectorAll.bind(document);

const slideshow = $(".slideshow");
const slides = $$(".slide-item");
const prevBtn = $(".prev-btn");
const nextBtn = $(".next-btn");
const pagination = $(".pagination");

let currentIndex = 0;

const duration = 500;
let isAnimating = false;

const autoplayTime = 3000;
let autoplayId;

function showSlide(index, direction) {
  if (isAnimating) {
    return;
  }

  isAnimating = true;

  const currentSlide = slides[currentIndex];
  const nextSlide = slides[index];

  if (direction === "next") {
    nextSlide.classList.add("next");

    nextSlide.offsetWidth;

    currentSlide.classList.add("prev");

    nextSlide.classList.remove("next");
    nextSlide.classList.add("active");
  } else {
    nextSlide.classList.add("prev");

    nextSlide.offsetWidth;

    currentSlide.classList.add("next");

    nextSlide.classList.remove("prev");
    nextSlide.classList.add("active");
  }

  currentIndex = index;

  // Cập nhật dot
  updatePagination();

  setTimeout(function () {
    currentSlide.classList.remove("active");
    currentSlide.classList.remove("prev");
    currentSlide.classList.remove("next");

    isAnimating = false;
  }, duration);
}

nextBtn.onclick = function () {
  let nextIndex = currentIndex + 1;

  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }

  showSlide(nextIndex, "next");
};

prevBtn.onclick = function () {
  let prevIndex = currentIndex - 1;

  if (prevIndex < 0) {
    prevIndex = slides.length - 1;
  }

  showSlide(prevIndex, "prev");
};

// autoplay
function startAutoplay() {
  if (autoplayId) {
    return;
  }

  autoplayId = setInterval(function () {
    let nextIndex = currentIndex + 1;

    if (nextIndex >= slides.length) {
      nextIndex = 0;
    }

    showSlide(nextIndex, "next");
  }, autoplayTime);
}
function stopAutoplay() {
  clearInterval(autoplayId);

  autoplayId = null;
}

startAutoplay();

slideshow.onmouseenter = function () {
  stopAutoplay();
};

slideshow.onmouseleave = function () {
  startAutoplay();
};

// pagination
function createPagination() {
  slides.forEach(function (slide, index) {
    const dot = document.createElement("button");

    dot.className = "pagination-item";

    if (index === currentIndex) {
      dot.classList.add("active");
    }

    dot.onclick = function () {
      let direction;

      if (index > currentIndex) {
        direction = "next";
      } else {
        direction = "prev";
      }

      showSlide(index, direction);
    };

    pagination.appendChild(dot);
  });
}

function updatePagination() {
  const paginationItems = $$(".pagination-item");

  paginationItems.forEach(function (item, index) {
    item.classList.remove("active");

    if (index === currentIndex) {
      item.classList.add("active");
    }
  });
}
createPagination();
