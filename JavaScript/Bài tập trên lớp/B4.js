// var A = [1,2,3,4,5,6,7,];

// var A1 = A.reverse();
// console.log("Mảng ban đầu:", A);
// console.log("Mảng sau khi đảo ngược:", A1);
var arr=[1,2,3,4,5];
var reverseArr =[];

for(var i = arr.length - 1; i>=0; i--){
    reverseArr.push(arr[i]);
}

console.log("Mảng ban đầu:" + arr);
console.log("Mảng đảo ngược:" + reverseArr);