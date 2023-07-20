const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const number = document.querySelector(".number");
const buyticket = document.querySelector(".buyticket");
const ticket = document.querySelector(".ticket");
const order = document.querySelector(".order");
const totalPrice = document.querySelector(".total-price");
const closeticket = document.querySelector(".x");

increase.addEventListener("click", () => {
  number.value++;
  totalPrice.textContent = "NT$" + number.value * 300;
});
decrease.addEventListener("click", () => {
  number.value <= 0 ? number.value : number.value--;
  totalPrice.textContent = "NT$" + number.value * 300;
});

buyticket.addEventListener("click", () => {
  ticket.classList.remove("active");
});

order.addEventListener("click", () => {
  ticket.classList.add("active");
});

closeticket.addEventListener("click", () => {
  ticket.classList.remove("active");
});

AOS.init();
