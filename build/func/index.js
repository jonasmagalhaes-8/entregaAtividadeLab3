"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = insertionSort;
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j].value > current.value) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = current;
    }
    return array;
}
