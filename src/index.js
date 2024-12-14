import { greet } from './utils';

export function hello(name) {
    return greet(name);
}

export function add(a, b){
    return a+b;
}

export function subtract(a, b){
    return a-b;
}

export function multiply(a,b){
return a*b;
}

export function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}