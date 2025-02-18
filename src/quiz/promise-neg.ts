// const array2D_3 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, -9]
// ];
/**
 * Finds all rows in a 2D array that contain at least one negative number.
 * Uses Promise.all() to check each row in parallel.
 * @param arr 2D array of numbers
 * @returns A promise that resolves to an array of rows containing negative numbers,
 * or rejects if the input is invalid.
 */
function findRowsWithNegatives(arr: number[][]): Promise<number[][]> {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr) || arr.length === 0) {
            return reject('Invalid input: Must be a non-empty 2D array');
        }

        // Process each row in parallel using Promise.all()
        Promise.all(
            arr.map(row =>
                new Promise<number[] | null>((res) => {
                    if (row.some(num => num < 0)) {
                        res(row);
                    } else {
                        res(null); // Return null for rows without negatives
                    }
                })
            )
        ).then(results => {
            // Filter out null values (rows without negatives)
            const negativeRows = results.filter(row => row !== null) as number[][];

            if (negativeRows.length > 0) {
                resolve(negativeRows);
            } else {
                reject('No rows contain negative numbers');
            }
        });
    });
}

// Example usage:
const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9] // This row contains a negative number
];

findRowsWithNegatives(array2D_3)
    .then(rows => console.log('Rows with negatives:', rows))
    .catch(error => console.error('Error:', error));

findRowsWithNegatives([
    [1, 2, 3],
    [4, 5, 6]
]) // No negatives
    .then(rows => console.log('Rows with negatives:', rows))
    .catch(error => console.error('Error:', error));

findRowsWithNegatives([]) // Invalid input
    .then(rows => console.log('Rows with negatives:', rows))
    .catch(error => console.error('Error:', error));
