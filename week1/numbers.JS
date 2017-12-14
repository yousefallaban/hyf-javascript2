// Q 1
let numbers = [1, 2, 3, 4];
let newNumbers = numbers
    .filter(number => number % 2 !== 0)
    .map(number => number * 2)
console.log("The doubled numbers are", newNumbers);

// Q 2
let addEvenNumbers = numbers.reduce((newNumbers, number) => {
        newNumbers.push(number);
    if (number % 2 == 0) {
        newNumbers.push(number);
    }
    return newNumbers;
    
}, []);
console.log("The final numbers are", addEvenNumbers);

