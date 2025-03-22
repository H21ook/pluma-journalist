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

    // Dialog-ийн гадна дарж хаах
    const dialog = document.getElementById("modal");
    const dialogOpenButton = document.getElementById("openModal");
    const dialogCloseButton = document.getElementById("closeModal");

    if (dialog) {
      // Dialog нээх товч
      if (dialogOpenButton) {
        dialogOpenButton.addEventListener("click", function () {
          dialog.classList.remove("hidden"); // Dialog нээх
          document.body.style.overflow = "hidden"; // Body scroll-ыг нуух
        });
      }

      // Dialog хаах товч
      if (dialogOpenButton) {
        dialogCloseButton.addEventListener("click", function () {
          dialog.classList.add("hidden"); // Dialog хаах
          document.body.style.overflow = "auto"; // Body scroll-ыг сэргээх
        });
      }

      dialog.addEventListener("click", function (event) {
        if (event.target.id === "modal") {
          event.target?.classList?.add("hidden"); // Dialog хаах
          document.body.style.overflow = "auto"; // Body scroll-ыг сэргээх
        }
      });
    }
  }
}
