









let form = document.querySelector(".form");


const clickPopup = () => {
  form.classList.toggle("active");
};

form.addEventListener("click", (e) => {
  e.preventDefault();
});








// let success= document.querySelector(".success");

// const clickPopup1 = () => {
//     form.classList.remove('active')

//     success.classList.toggle("active");
// };

// success.addEventListener("click", (e) => {
//   e.preventDefault();
// });