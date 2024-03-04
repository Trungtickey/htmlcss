var n = Number(prompt("Nhập vào 1 số nguyên dương bất kì:"));
if(isNaN(n) || n <= 0){
    alert("Nhập lại đi bạn êi");
}
var sum = 0;
var oddNumbers = [];
// Lặp qua các số nguyên dương lẻ từ 1 to n để tính tổng
for (let i=1; i<=n; i+= 2){
    sum +=i;
    oddNumbers.push(i);
}
if (sum % 2 !==0){
    console.log("Tổng các số là số lẻ là: ", sum);
} else {
    sum -= oddNumbers.pop();
    console.log("Các số lẻ là: ", sum)
}