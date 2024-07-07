// file path: doubleTrouble.js

function doubleTrouble(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i] * 2);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

// Example usage:
const inputArray = [1, 2, 2, 3, 4, 4, 4, 5];
const outputArray = doubleTrouble(inputArray);
console.log(outputArray); // Output: [2, 4, 2, 6, 8, 4, 4, 10]
