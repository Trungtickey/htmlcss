let largestOfArrs1=([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]);
let largestOfArrs2=([1, 2, 3, 4], [5, 1, 2, 9]);
function maxInArrays(arrays) {
    let maxValues = [];
    for (let arr of arrays) {
        maxValues.push(Math.max(arr));
    }
    return maxValues;
}

let result = maxInArrays(largestOfArrs1,largestOfArrs2);
console.log(result);
