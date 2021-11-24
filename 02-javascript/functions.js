// default function parameters
function greetings(ner, nas, huis = "male") {
    console.log(ner, nas, huis);
}

greetings("Sarnai", 12, "female");
greetings("Bold", 16);

// rest parameter
function printArray(x, y, ...params) {
    console.log(x, y);
    console.log(params);
}

printArray(1, 2, 45, 3);
