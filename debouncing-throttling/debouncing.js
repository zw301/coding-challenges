// function debounce(func, wait = 20, immediate = true) {
//   let timeout;
//
//   return function() {
//     let context = this;
//     let args = arguments;
//
//     let later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//
//     let callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//
//     if (callNow) func.apply(context, args);
//   };
// }


function debounce(fn, delay) {
  let timer = null;

  return function() {
    let context = this;
    let args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}


function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);

  let last;
  let deferTimer;

  return function () {
    let context = scope || this;

    let now = new Date().getTime();
    let args = arguments;

    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

document.querySelector("body").addEventListener("mousemove", throttle(function (event) {
  console.log('tick');
}, 1000))


// ES6
function debounced(delay, fn) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
}


// ES6 code
function throttled(delay, fn) {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

//Q: We have a function called makeRequest that makes an API request. We also have a function called eventHandler that is hooked up to an event (a click, for example), and right now it's a dumb handler that simply calls makeRequest.

//Write a new event handler eventHandlerWithThrottling that we can hook up to the click event such that it won't call makeRequest more than once every 5 seconds.

//We do not care what the API request returns (assume it's a fire-and-forgot POST)
//Events that occur within 5 seconds of an API request are "remembered", and once the 5 second timeout is over, the latest one will be fired.

function makeRequest(payload) {
    // let's pretend this makes a request, and logs the payload/time of request
    console.log({
      data: payload,
      time: new Date().getTime()
    });
}

// non-throttled version
const eventHandler = function(payload) {
    makeRequest(payload);
}

const eventHandlerWithThrottling = (function(payload) {
  let last;
  let deferTimer;

  return (payload) => {
    let now = new Date().getTime();

    if (last && now < last + 5000) {
      if (deferTimer) clearTimeout(deferTimer);

      deferTimer = setTimeout(() => {
        last = new Date().getTime();
        makeRequest(payload);
      }, 5000 - (now - last));
    } else {
      last = now;
      makeRequest(payload);
    }
  };
})();

// util function for testing
function simulateEvent(fn, payload, timeOfEvent) {
  setTimeout(function() {
    fn(payload);
  }, timeOfEvent)
}

// E: 'hello' (t = 0)
// R: 'hello' (t = 0)

// E: 'hello' (t = 0), 'goodbye' (t = 4)
// R: 'hello' (t = 0), 'goodbye' (t = 5)

// E: 'hello' (t = 0), 'hello again' (t = 2), 'goodbye again' (t = 4), 'hello again' (t = 7)
// R: 'hello' (t = 0), 'goodbye again' (t = 5), 'hello again' (t = 10)

// 1. 'hello' (t = 0)
// simulateEvent(eventHandlerWithThrottling, 'hello', 0);

//  2. 'hello' (t = 0), 'goodbye' (t = 5)
simulateEvent(eventHandlerWithThrottling, 'hello', 0);
simulateEvent(eventHandlerWithThrottling, 'goodbye', 4000);

// 3. 'hello' (t = 0), 'goodbye again' (t = 5), 'final call' (t = 10)
// simulateEvent(eventHandlerWithThrottling, 'hello', 0);
// simulateEvent(eventHandlerWithThrottling, 'hello again', 2000); // ignored
// simulateEvent(eventHandlerWithThrottling, 'goodbye again', 4000);
// simulateEvent(eventHandlerWithThrottling, 'final call', 7000);
