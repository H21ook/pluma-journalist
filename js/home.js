var scrollStep = 100;

function initScroll() {
  var scroll = document.getElementById("categoryList");
  var rightButton = document.getElementById("categoryRightButton");
  var leftButton = document.getElementById("categoryLeftButton");

  if (scroll && rightButton && leftButton) {
    // scroll end then right hidden button
    var scrollWidth = scroll?.scrollWidth;
    var clientWidth = scroll?.clientWidth;
    var scrollLeft = scroll.scrollLeft;

    var isEnd = scrollWidth - clientWidth === scrollLeft;

    if (scrollWidth > clientWidth) {
      document
        .getElementById("categoryRightButton")
        .classList.remove("invisible", "opacity-0");
      document
        .getElementById("categoryRightButton")
        .classList.add("visible", "opacity-100");
    }

    if (isEnd) {
      document
        .getElementById("categoryRightButton")
        .classList.remove("visible", "opacity-100");
      document
        .getElementById("categoryRightButton")
        .classList.add("invisible", "opacity-0");
    }

    // scroll start then left hidden button
    if (scrollLeft === 0) {
      document
        .getElementById("categoryLeftButton")
        .classList.remove("visible", "opacity-100");
      document
        .getElementById("categoryLeftButton")
        .classList.add("invisible", "opacity-0");
    }
  }
}

function rightScroll() {
  var scroll = document.getElementById("categoryList");
  var scrollLeft = scroll.scrollLeft + scrollStep;

  scroll.scrollBy({
    left: +scrollStep, // Adjust scroll distance
    behavior: "smooth",
  });

  // scroll end then right hidden button
  var scrollWidth = scroll.scrollWidth;
  var clientWidth = scroll.clientWidth;

  console.log("scrollLeft ", scrollWidth - clientWidth, scrollLeft);

  var isEnd = scrollWidth - clientWidth <= scrollLeft;

  if (isEnd) {
    document
      .getElementById("categoryRightButton")
      .classList.remove("visible", "opacity-100");
    document
      .getElementById("categoryRightButton")
      .classList.add("invisible", "opacity-0");
  }
  if (scrollLeft > 0) {
    document
      .getElementById("categoryLeftButton")
      .classList.remove("invisible", "opacity-0");
    document
      .getElementById("categoryLeftButton")
      .classList.add("visible", "opacity-100");
  }
}

function leftScroll() {
  var scroll = document.getElementById("categoryList");
  const scrollLeft = scroll.scrollLeft - scrollStep;

  scroll.scrollBy({
    left: -scrollStep, // Adjust scroll distance
    behavior: "smooth",
  });

  if (scrollLeft <= 0) {
    document
      .getElementById("categoryLeftButton")
      .classList.remove("visible", "opacity-100");
    document
      .getElementById("categoryLeftButton")
      .classList.add("invisible", "opacity-0");
  }
  if (scrollLeft < scrollStep) {
    document
      .getElementById("categoryRightButton")
      .classList.remove("invisible", "opacity-0");
    document
      .getElementById("categoryRightButton")
      .classList.add("visible", "opacity-100");
  }
}

function init(page) {
  if (page === "index") {
    var select = document.getElementById("selectButton");
    var selectmenu = document.getElementById("selectMenu");

    if (selectmenu) {
      var selectItems = selectmenu.children;
      var selectButtonTitle = select.querySelector("#selectTitle");

      for (var i = 0; i < selectItems.length; i++) {
        var item = selectItems[i];
        item.addEventListener("click", function (event) {
          event.preventDefault();
          selectButtonTitle.innerHTML = event.target.innerHTML;
          selectmenu.classList.add("hidden");
        });
      }
    }

    if (select) {
      document
        .getElementById("selectButton")
        .addEventListener("click", function () {
          const selectMenu = document.getElementById("selectMenu");
          selectMenu.classList.toggle("hidden");
        });

      // select-ийн гадна дарж хаах
      document.addEventListener("click", function (event) {
        const selectButton = document.getElementById("selectButton");
        const selectMenu = document.getElementById("selectMenu");
        if (
          !selectButton.contains(event.target) &&
          !selectMenu.contains(event.target)
        ) {
          selectMenu.classList.add("hidden");
        }
      });
    }
  }
}

window.addEventListener("resize", initScroll);
window.addEventListener("load", initScroll);

function selectCategory(e) {
  e.preventDefault();
  var category = e.target;
  var allCategoryList = document.getElementById("categoryList").children;

  for (var i = 0; i < allCategoryList.length; i++) {
    allCategoryList[i].classList.remove("activeCategoryItem");
    allCategoryList[i].classList.add("inactiveCategoryItem");

    if (category === allCategoryList[i]) {
      var tabs = document.getElementById("tabs").children;
      for (var j = 0; j < tabs.length; j++) {
        if (i === j) {
          tabs[j].classList.remove("hidden");
        } else {
          tabs[j].classList.add("hidden");
        }
      }
    }
  }
  category.classList.remove("inactiveCategoryItem");
  category.classList.add("activeCategoryItem");
}
