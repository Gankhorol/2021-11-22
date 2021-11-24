const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// = (a=10;)
// == (a==b)
// === (a===b)

const odds = numbers.filter(function (item) {
    if (item % 2 === 1) {
        return true;
    }
    return false;
});

console.log(odds);

const numbers2 = numbers.map((item) => item * item);

console.log(numbers2);

numbers.forEach((item) => {
    console.log(item);
});
