// const array2D_1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

/**
 * Asynchronously sums all numbers in a 2D array using async/await.
 * @param arr 2D array of numbers
 * @returns A promise that resolves to the total sum of numbers in the array,
 * or rejects if the input is invalid.
 */
async function sum2DArrayAsync(arr: number[][]): Promise<number> {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Invalid input: Must be a non-empty 2D array');
    }

    let totalSum = 0;

    const rowSums = await Promise.all(arr.map(async row => {
        if (!Array.isArray(row)) {
            throw new Error('Invalid row: Each element must be an array of numbers');
        }

        let sum = 0;
        for (const num of row) {
            if (typeof num !== 'number') {
                throw new Error('Invalid element: Must be a number');
            }
            sum += num;
        }
        return sum;
    }));

    totalSum = rowSums.reduce((acc, curr) => acc + curr, 0);
    return totalSum;
}

// example
const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] 
];

sum2DArrayAsync(array2D_1)
    .then(sum => console.log('Total Sum:', sum))  // expevcted output 45
    .catch(error => console.error('Error:', error.message));

sum2DArrayAsync([]) 
    .then(sum => console.log('Total Sum:', sum))
    .catch(error => console.error('Error:', error.message));


