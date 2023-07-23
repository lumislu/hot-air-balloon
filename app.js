const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const number = document.querySelector(".number");
const buyticket = document.querySelector(".buyticket");
const ticket = document.querySelector(".ticket");
const order = document.querySelector(".order");
const totalPrice = document.querySelector(".total-price");
const closeticket = document.querySelector(".x");

const ticketPrice = 300;
increase.addEventListener("click", () => {
  number.value++;
  totalPrice.textContent = "NT$" + number.value * ticketPrice;
});
decrease.addEventListener("click", () => {
  number.value <= 0 ? number.value : number.value--;
  totalPrice.textContent = "NT$" + number.value * ticketPrice;
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
number.addEventListener("change", (e) => {
  let i = number.value;
  totalPrice.textContent = "NT$" + number.value * ticketPrice;
});

AOS.init();
