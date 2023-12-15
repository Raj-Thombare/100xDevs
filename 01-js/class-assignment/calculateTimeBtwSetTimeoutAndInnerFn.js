// Calculate the time it takes between a setTimeout call and the inner function actually running

const startTime = Date.now();
setTimeout(() => {
  const endTime = Date.now();
  console.log(
    `Time taken to actually run inner function inside the setTimeout with a delay of  ${
      (endTime - startTime) / 1000
    }`
  );
}, 2000);
