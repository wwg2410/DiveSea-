




let burger = document.querySelector(".burger");
let mobileMenu = document.querySelector(".mobile__menu")


const clickBurger= () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("active")
  document.body.classList.toggle("no__scroll")
};

burger.addEventListener("click", (e) => {
  e.preventDefault();
  clickBurger();
});





// let success= document.querySelector(".success");

// const clickPopup1 = () => {
//     form.classList.remove('active')

//     success.classList.toggle("active");
// };

// success.addEventListener("click", (e) => {
//   e.preventDefault();
// });