function greeting() {
    console.log("hello");
}
greeting();

// sugar syntax

function sum1(a, b) {
    return a + b;
}

const c = sum1(12, 34);

console.log(c);

const f1 = () => {
    console.log(1);
    console.log(2);
};

const sum2 = (a, b) => a + b;

const f2 = (a) => {
    console.log(a);
    console.log(2);
};

console.log(sum2(34, 45));
