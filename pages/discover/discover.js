




const modal = document.querySelector(".bid__modal");

const openButtons = document.querySelectorAll(".place__bid");

const closeButton = document.querySelector(".modal__close");



openButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        modal.classList.add("active");
    });
});


closeButton.addEventListener("click", function () {
    modal.classList.remove("active");
});



