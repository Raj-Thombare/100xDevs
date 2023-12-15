//create a terminal clock (HH:MM:SS)
function terminalClock() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const amORpm = hour >= 12 ? "PM" : "AM";

  const hourFormat = hour % 12 || 12;

  console.log(`${hourFormat} : ${minute} : ${second} ${amORpm}`);
}

setInterval(terminalClock, 1000);
