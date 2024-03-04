function longestElement(array) {
    return array.reduce((a, b) => a.length > b.length ? a : b);
}

var declaredArray = ["ngẫu", "nhiên", "các", "thành", "phần"];
console.log('Mang bai 2: ', declaredArray)
console.log(longestElement(declaredArray));