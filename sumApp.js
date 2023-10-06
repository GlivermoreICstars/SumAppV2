const inputNumber = document.getElementById("inputNumber");
const button1 = document.getElementById("button1");
const resultsParagraph = document.getElementById("results"); // Reference to the "results" paragraph

const inputPrintEvenNumbers = document.getElementById("printEvenNumbers");
const button2 = document.getElementById("button2");
const results2Paragraph = document.getElementById("results2"); // Reference to the "results2" paragraph


button1.addEventListener("click", () => {
    const n = parseInt(inputNumber.value);

    if (!isNaN(n)) {
        const sum = calculateSum(n);
        
        resultsParagraph.textContent = `The sum of numbers from 1 to ${n} is ${sum}.`;
    } else {
        resultsParagraph.textContent = "Please enter a valid number.";
    }
});

button2.addEventListener("click", () => {
    const n = parseInt(inputPrintEvenNumbers.value);

    if (!isNaN(n)) {
        const evenNumbers = getEvenNumbers(n);
        
        results2Paragraph.textContent = `Even numbers from 2 to ${n}: ${evenNumbers.join(", ")}`;
    } else {
        results2Paragraph.textContent = "Please enter a valid number.";
    }
});


function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


function getEvenNumbers(n) {
    const evenNumbers = [];
    for (let i = 2; i <= n; i += 2) {
        evenNumbers.push(i);
    }
    return evenNumbers;
}

