let count = 0;

const counter = setInterval(() => {
  count++;
  console.log(count);
  if (count === 10) {
    clearInterval(counter);
  }
}, 1000);
