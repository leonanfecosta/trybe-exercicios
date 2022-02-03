let numbers = [];
let div = [];

for (let index = 0; index < 25; index += 1) {
  numbers[index] = index + 1;
}
console.log(numbers);

for (let i = 0; i < numbers.length; i+=1) {
    div.push(numbers[i]/2);
}
console.log(div);
