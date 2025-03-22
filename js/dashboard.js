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
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      initialDate: "2025-03-07",
      selectable: true,
      dateClick: function (info) {
        // alert("Clicked on: " + info.dateStr);
        // alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
        // alert("Current view: " + info.view.type);
        // change the day's background color just for fun
        // info.dayEl.style.backgroundColor = "red";
        const dialog = document.getElementById("modal");
        dialog.classList.remove("hidden"); // Dialog нээх
        document.body.style.overflow = "hidden"; // Body scroll-ыг нуух
        const title = document.getElementById("title");
        title.innerHTML = info.dateStr;
      },
      select: function (info) {
        // alert("selected " + info.startStr + " to " + info.endStr);
        const dialog = document.getElementById("modal");
        dialog.classList.remove("hidden"); // Dialog нээх
        document.body.style.overflow = "hidden"; // Body scroll-ыг нуух
        const title = document.getElementById("title");
        title.innerHTML = info.startStr + " - " + info.endStr;
      },
      headerToolbar: {
        left: "prev,next title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,list",
      },
      buttonText: {
        today: "Today",
        month: "Month",
        week: "Week",
        day: "Day",
        list: "List",
      },
      events: [
        {
          title: "All Day Event",
          start: "2025-03-01",
          color: "#43455c",
        },
        {
          title: "Long Event",
          start: "2025-03-07",
          end: "2025-03-10",
          color: "#dc455c",
        },
        {
          groupId: "999",
          title: "Repeating Event",
          start: "2025-03-09T16:00:00",
          color: "#d1e55c",
        },
        {
          groupId: "999",
          title: "Repeating Event",
          start: "2025-03-16T16:00:00",
          color: "#d1e55c",
        },
        {
          title: "Conference",
          start: "2025-03-11",
          end: "2025-03-13",
        },
        {
          title: "Meeting",
          start: "2025-03-12T10:30:00",
          end: "2025-03-12T12:30:00",
        },
        {
          title: "Lunch",
          start: "2025-03-12T12:00:00",
        },
        {
          title: "Meeting",
          start: "2025-03-12T14:30:00",
        },
        {
          title: "Birthday Party",
          start: "2025-03-13T07:00:00",
        },
        {
          title: "Click for Google",
          url: "https://google.com/",
          start: "2025-03-28",
          color: "43455c",
          textColor: "white",
        },
      ],
    });
    calendar.render();

    // Dialog нээх товч
    // document.getElementById("openModal").addEventListener("click", function () {
    //   const dialog = document.getElementById("modal");
    //   dialog.classList.remove("hidden"); // Dialog нээх
    //   document.body.style.overflow = "hidden"; // Body scroll-ыг нуух
    // });

    // Dialog хаах товч
    document
      .getElementById("closeModal")
      .addEventListener("click", function () {
        const dialog = document.getElementById("modal");
        dialog.classList.add("hidden"); // Dialog хаах
        document.body.style.overflow = "auto"; // Body scroll-ыг сэргээх
      });

    // Dialog-ийн гадна дарж хаах
    document
      .getElementById("modal")
      .addEventListener("click", function (event) {
        if (event.target.id === "modal") {
          event.target?.classList?.add("hidden"); // Dialog хаах
          document.body.style.overflow = "auto"; // Body scroll-ыг сэргээх
        }
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
  }
  category.classList.remove("inactiveCategoryItem");
  category.classList.add("activeCategoryItem");
}
