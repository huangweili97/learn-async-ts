
/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty or invalid
 */
function sum2DArray(arr: number[][]): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log('Sum called ...');

        // Ensure the array is not empty
        if (!Array.isArray(arr) || arr.length === 0) {
            return reject('Cannot sum an empty or invalid array');
        }

        // Check if all elements are arrays and contain only numbers
        if (!arr.every(row => Array.isArray(row) && row.every(num => typeof num === 'number'))) {
            return reject('Invalid 2D array: All elements must be arrays of numbers');
        }

        /** 
         * Schedule execution to the next event loop cycle
         * This is done using setTimeout() to simulate asynchronous operations.
         * Replace setTimeout with direct execution to see the difference.
         **/
        setTimeout(() => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
            resolve(sum);
        }, 0);

        console.log('Returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

sum2DArray(array2D)
    .then(sum => console.log('Sum:', sum))
    .catch(error => console.error('Error:', error));

sum2DArray([])
    .then(sum => console.log('Sum:', sum))
    .catch(error => console.error('Error:', error));


