/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise 1 resolved after ${t} seconds`);
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise 2 resolved after ${t} seconds`);
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise 3 resolved after ${t} seconds`);
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  const promise2 = wait2(t1);
  const promise3 = wait3(t2);
  const promise1 = wait1(t3);

  return Promise.all([promise1, promise2, promise3]).then(() => {
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    return totalTime;
  });
}

calculateTime(2, 3, 1)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

module.exports = calculateTime;
