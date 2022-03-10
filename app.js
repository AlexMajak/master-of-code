// b > a
function testCycle(a, b) {
  var x = "";
  while (b >= a) {
    x = x + " " + a;
    //  console.log(a);
    a++;
  }
  // Тут нужно написать решение
  return x;
}

console.log(testCycle(2, 6));
