function testCycle(n) {
  var x = "";
  // Тут нужно написать решение
  for (let i = 1; i <= n; i++) {
    x += Math.pow(i, 2) + " ";
  }
  return x;
}

console.log(testCycle(8));

// function testCycle(a, b) {
// 	let x=0;
// 	if (a > b) [a,b] = [b,a];
// 	for (let i=a, s=2*a-1, q=a*a; i <= b; s += 2,q += s, ++i) x+=q;
// 	return x;
// }
