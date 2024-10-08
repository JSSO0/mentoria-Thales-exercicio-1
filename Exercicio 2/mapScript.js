function customMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}


const numbers = [1, 2, 3, 4, 5, 11, 12, 13];
const doubledNumbers = customMap(numbers, function(num) {
    return num * 2;
});

console.log(doubledNumbers);
