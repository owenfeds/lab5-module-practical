

export function add(a, b) { 
    return a + b 
}
export function subtract(a, b) { 
    return a - b 
}

export default function multiply(a, b) {
    return a * b
} 

import {
    toUpperCase
} from './stringModule.js';

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}

import {
    findMax
} from './arrayModule.js';

export function maxAndMultiplyUpper(arr, a) {
    const maxValue = findMax(arr);
    const result = maxValue * a;
    console.log(toUpperCase(result.toString()));
}


//console.log(add(1,2));
//console.log(subtract(5,5));
//console.log(multiply(3*2));