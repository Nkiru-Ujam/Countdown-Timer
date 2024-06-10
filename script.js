"use strict";

const daysContainer = document.querySelector(".days");
const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");

function actualDate() {
  const today = new Date();
  const endDate = new Date("Dec 31, 2024 23:59:59");
  const difference = endDate - today;
  // console.log(difference);
  // console.log(endDate);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    daysContainer.textContent = "00" + "day";
    hoursContainer.textContent = "00" + "hour";
    minutesContainer.textContent = "00" + "minute";
    secondsContainer.textContent = "00" + "sec";
    clearInterval(intervalId);
    return;
  }

  // console.log(days, hours, minutes, seconds);
  daysContainer.textContent = days + "days";
  hoursContainer.textContent = hours < 10 ? "0" + hours + "hrs" : hours + "hrs";
  minutesContainer.textContent =
    minutes < 10 ? "0" + minutes + "mins" : minutes + "mins";
  secondsContainer.textContent =
    seconds < 10 ? "0" + seconds + "s" : seconds + "s";
  // console.log(days);
}
const intervalId = setInterval(actualDate, 1000);
actualDate();
