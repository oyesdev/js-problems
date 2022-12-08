function counter(min, max) {
  if (min > max) {
    return;
  } else {
    console.log(min);
    counter(min + 1, max);
  }
}

counter(2, 5);
