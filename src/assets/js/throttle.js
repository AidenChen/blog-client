export default function (fn, time) {
  let timer;
  const firstTime = true;
  return function (...args) {
    if (firstTime) {
      fn.apply(this, args);
      return false;
    }
    if (timer) {
      return false;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn.apply(this, args);
    }, time || 500);
  };
}
