function* fibonucci(count) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < count; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

function* fibonucciMax(value) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < value; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

for (let num of fibonucci(7)) {
  console.log(num);
}

for (let val of fibonucciMax(6)) {
  console.log(val);
}
