import multiply, {
    add, subtract
} from './mathModule.js';

import {
    toLowerCase, toUpperCase
} from './stringModule.js';

import {
    findMax, reverseArray
} from './arrayModule.js';

import {
    addAndLogUpper
} from './mathModule.js';

import { 
    maxAndMultiplyUpper 
} from './mathModule.js';

console.log(add(5,3));
console.log(toUpperCase("hello"));
console.log(multiply(3,3));
console.log(findMax([1,2,3,4,5]));
console.log(reverseArray([1,2,3,4,5]));

addAndLogUpper(10, 20);

maxAndMultiplyUpper([1,2,3], 2);
