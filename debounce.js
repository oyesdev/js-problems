let cnt = 0;
function getData() {
  console.log("fetching data", ++cnt);
}

const myDebounce = function (callback, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

const betterFunction = myDebounce(getData, 300);
