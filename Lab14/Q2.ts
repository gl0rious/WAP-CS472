import { Calculator } from './Calculator';

function performCalculations() {
    const calculator = new Calculator();

    const num1: number = 10;
    const num2: number = 5;

    const addition: number = calculator.add(num1, num2);
    const subtraction: number = calculator.subtract(num1, num2);
    const multiplication: number = calculator.multiply(num1, num2);
    const division: number = calculator.divide(num1, num2);

    console.log(`Addition: ${num1} + ${num2} = ${addition}`);
    console.log(`Subtraction: ${num1} - ${num2} = ${subtraction}`);
    console.log(`Multiplication: ${num1} * ${num2} = ${multiplication}`);
    console.log(`Division: ${num1} / ${num2} = ${division}`);
}

performCalculations();
