function customReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = customReduce(numbers, function(acc, num) {
    return acc + num;
}, 0);

console.log(sum);
