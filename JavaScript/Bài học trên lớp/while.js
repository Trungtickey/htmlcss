// var i=0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

// let positiveNum = Number(prompt('Nhập vào 1 số dương để tính tổng:'));

// let sum = 0;
// while(positiveSum > 0){
//     sum += positiveNum(prompt('Nhập 1 số dương để tính tổng, kết thúc bằng cách nhập vào 1 số <=0'));
// }
// console.log("Tổng các số lớn hơn 0 là: ", sum );

let total = 0;
let userInput;
do{
    userInput = Number(prompt("Nhập 1 số dương(nhập số âm hoặc chữ để kết thúc):"));
    if(!isNaN(userInput) && userInput > 0){
        total += userInput;
    } else {
        break;
    }
} while (true);
console.log("Tổng các số nguyên dương đã nhập là:" +total);