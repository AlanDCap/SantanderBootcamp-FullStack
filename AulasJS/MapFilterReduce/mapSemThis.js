function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [3, 6, 9, 12, 18, 21];

console.log(mapSemThis(nums));
console.log(nums);


//modo ainda mais abreviado
const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);