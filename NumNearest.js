const num = 20; 
let pwr = 1;

while (pwr <= num) {
  pwr *= 2;
}
if ((pwr - num) > (pwr / 2 - num)) {
  pwr /= 2;
}

console.log('The number ' + pwr + ' is the power of 2 nearest to ' + num);