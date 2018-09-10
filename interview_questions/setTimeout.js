// Write a function printNumbers(from, to) that outputs a number every second,
// starting from from and ending with to.

function printNumber(from, to) {
  let curr = from;

  let timerId = setInterval(function() {
    if (curr === to) {
      clearInterval(timerId);
    }
    curr++;
  }, 1000);
}


function printNumber(from, to) {
  let curr = from;

  return setTimeout(function print() {
    if (curr < to) {
      setTimeout(print, 1000);
    }
    curr++;
  }, 1000)
}
printNumber(5, 10);


function customSetInterval (callback, delay) {
	return setTimeout(() => {
		callback();
    let prevTimerId = timerId;
		timerId = customSetInterval(callback, delay);
    clearTimeout(prevTimerId);
	}, delay);
}

function hello() {console.log("hello")};
let timerId = customSetInterval(hello, 2000);
// clearTimeout(timerId);
