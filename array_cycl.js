console.group('Знайти суму та кількість позитивних елементів.')

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]; 

let sum = 0;
let positive = 0;
for(let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element > 0) {
        sum = sum + element;
        positive++; 
    } 
}
console.log(positive, sum);
console.groupEnd();

console.group('Знайти мінімальний елемент масиву та його порядковий номер.')

let min = array[0];
for(let i = 0; i < array.length; i++) {
    const itemMin = array[i];
    if (min > itemMin) {
        min = itemMin;
    }
}
console.log(min, array.indexOf(min));
console.groupEnd();

console.group('Знайти максимальний елемент масиву та його порядковий номер.')

let max = array[0];
for(let i = 0; i < array.length; i++) {
    const itemMax = array[i];
    if(max < itemMax) {
        max = itemMax;
    }
}
console.log(max, array.indexOf(max));
console.groupEnd();

console.group('Визначити кількість негативних елементів.')

let negative = 0;
for(let i = 0; i < array.length; i++){
    const item = array[i];
    if(item < 0) {
        negative++;
    }
}
console.log(negative);
console.groupEnd();

console.group('Знайти добуток позитивних елементів.')

let multi = 1;
for(let i = 0; i < array.length; i++) {
    const item = array[i];
    if(item > 0) {
       multi = multi * item;
    }
}
console.log(multi);
console.groupEnd();