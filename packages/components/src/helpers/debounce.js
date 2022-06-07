export const debounce = (callback, time) => {
  let debounceTimer;
  return (...arg) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => callback.apply(this, arg), time);
  };
};
