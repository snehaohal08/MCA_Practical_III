//  Create a custom Node.js module to check Prime Number and
// Armstrong Number and import it into your main application.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function isArmstrong(num) {
  let temp = num, sum = 0;
  const r = num.toString().length;

  while (temp > 0) {
    let r = temp % 10;
    sum += r * r*r;
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
module.exports={isPrime,isArmstrong};