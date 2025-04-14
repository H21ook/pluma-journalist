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
  const selectList = document.querySelectorAll(".select");

  if (selectList?.length > 0) {
    selectList.forEach((select) => {
      const selectButton = select.querySelector(".selectButton");
      const selectMenu = select.querySelector(".selectMenu");

      if (selectButton && selectMenu) {
        const selectItems = selectMenu.children;

        selectButton.addEventListener("click", function () {
          selectMenu.classList.toggle("hidden");
        });

        const selectTitle = selectButton.querySelector(".selectTitle");
        if (selectItems) {
          for (let i = 0; i < selectItems.length; i++) {
            const item = selectItems[i];
            console.log("iotem", selectTitle);
            item.addEventListener("click", function (event) {
              console.log(event.target?.outerHTML);
              selectTitle.innerHTML = event.target?.outerHTML;
              selectMenu.classList.add("hidden");
            });
          }
        }

        document.addEventListener("click", function (event) {
          console.log(event.target);
          if (
            !selectButton.contains(event.target) &&
            !selectMenu.contains(event.target)
          ) {
            selectMenu.classList.add("hidden");
          }
        });
      }
    });
  }

  if (page === "index") {
    const ctx = document.getElementById("myChart").getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(248, 166, 152, 0.6)");
    gradient.addColorStop(1, "rgba(255,255,255, 0)");

    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "1цаг",
          "2цаг",
          "3цаг",
          "4цаг",
          "5цаг",
          "6цаг",
          "7цаг",
          "8цаг",
          "9цаг",
          "10цаг",
          "11цаг",
        ],
        datasets: [
          {
            label: "Page Views",
            data: [12, 50, 60, 34, 100, 55, 30, 50, 60, 65, 40],
            backgroundColor: gradient,
            borderColor: "#f8a698",
            borderWidth: 2,
            fill: "start",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            padding: {
              left: 10,
              top: 8,
              right: 10,
              bottom: 8,
            },
            backgroundColor: "#111827",
            titleColor: "#919EAB",
            titleFont: {
              size: 14,
              weight: 500,
            },
            bodyColor: "#ffffff",
            boxHeight: 8,
            boxWidth: 8,
            boxPadding: 4,
            bodyFont: {
              size: 12,
              weight: 500,
              lineHeight: 1.2,
            },
            labelColors: {},
            callbacks: {
              labelColor: function (context) {
                return {
                  backgroundColor: "#F8A698",
                  borderColor: "#F8A698",
                  borderWidth: 5,
                  borderRadius: 4,
                };
              },
              label: function (tooltipItem, data) {
                return tooltipItem.formattedValue;
              },
            },
          },
        },

        tension: 0.3,
        responsive: true,
        scales: {
          y: {
            ticks: {
              color: "#637381",
              font: {
                size: 12, // 'size' now within object 'font {}'
              },
            },
            grid: {
              display: false, // Hide grid lines on x-axis
            },
            beginAtZero: true,
          },
          x: {
            grid: {
              display: false, // Hide grid lines on x-axis
            },
            ticks: {
              color: "#637381",
              font: {
                size: 12, // 'size' now within object 'font {}'
              },
            },
          },
        },
        layout: {
          padding: 0,
        },
      },
    });

    const words = [
      ["Монгол", 80],
      ["Хэл", 65],
      ["Бич", 45],
      ["Технологи", 90],
      ["Програм", 30],
      ["Код", 55],
      ["Хөгжим", 70],
      ["Урлаг", 25],
      ["Спорт", 85],
      ["Шинжлэх", 40],
      ["Ухаан", 95],
      ["Тоглоом", 20],
      ["Аялал", 60],
      ["Ном", 75],
      ["Сургууль", 50],
      ["Багш", 35],
      ["Оюутан", 88],
      ["Хичээл", 15],
      ["Гэр", 72],
      ["Гэр бүл", 62],
      ["Найз", 48],
      ["Хайр", 92],
      ["Амьдрал", 28],
      ["Эрүүл", 67],
      ["Мөрөөдөл", 53],
      ["Зорилго", 82],
      ["Амжилт", 39],
      ["Баяр", 76],
      ["Инээмсэглэл", 24],
      ["Итгэл", 61],
      ["Хүч", 89],
      ["Тэмцэл", 33],
      ["Ялалт", 71],
      ["Урам", 47],
      ["Бүтээл", 84],
      ["Ирээдүй", 29],
      ["Өнгөрсөн", 66],
      ["Одоо", 54],
      ["Цаг", 91],
      ["Хувьсал", 41],
      ["Шинэ", 78],
      ["Хуучин", 26],
      ["Түүх", 64],
      ["Соёл", 87],
      ["Уламжлал", 32],
      ["Байгаль", 73],
      ["Амьтан", 49],
      ["Ургамал", 81],
      ["Далай", 37],
      ["Уул", 69],
    ];

    WordCloud(document.getElementById("word-cloud"), {
      list: words,
      gridSize: 8, // Үгсийн хоорондын зай
      weightFactor: 0.3, // Давтамжийн хэмжээг хэрхэн томруулах (тохируулж болно)
      color: "random-dark", // Санамсаргүй өнгө
      backgroundColor: "#fff", // Дэвсгэр өнгө
      rotateRatio: 0, // Хазайлтын хувь (0-1)
      shuffle: true, // Санамсаргүй байршуулах
    });
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
