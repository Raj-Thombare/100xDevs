let count = 0;

for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    count++;
    console.log("counter: ", count);
  }, i * 1000);
}
