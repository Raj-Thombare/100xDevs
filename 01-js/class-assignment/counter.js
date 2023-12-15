// Create a counter in Javascript (counts down from 30 to 0)

let count = 30;

const countDown = () => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(interval);
    console.log("Countdown complete!");
  }
};
const interval = setInterval(countDown, 1000);
