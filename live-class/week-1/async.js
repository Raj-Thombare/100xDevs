// asynchronous nature of js
// async tasks are --> fetch - making an api request, setTimeout, fs.readFile - reading file

const sumTill100 = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const calSum = () => {
  console.log(sumTill100(100));
};

// setTimeout(calSum, 2000); // async api --> managed by event loop

const syncFunc = () => {
  let sum = 0;
  for (let i = 1; i <= 1000000000; i++) {
    sum += i;
  }
  return sum;
};

const startTime = new Date().getTime();
console.log("start time --> ", startTime);
console.log(syncFunc());
const endTime = new Date().getTime();
console.log("end time --> ", endTime);

console.log(endTime - startTime);
console.log("Hello World!");
