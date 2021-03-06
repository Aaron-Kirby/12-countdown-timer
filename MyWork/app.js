const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2020, 4, 24, 11, 30, 0); // months are 0 index based, hours are military

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${weekday}, ${month} ${date} ${year}, ${hours}:${minutes}am`;