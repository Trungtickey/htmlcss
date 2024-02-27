var n=Number(prompt("Nhập số nguyên dương n"));
if(isNaN(n) || n<=0){
    alert("Nhập sai cmnr, nhập lại đi ku");
}
var sum = 0;
var m = 0;
while(sum <n){
    m++;
    sum +=m;
}
m--;
console.log("Số nguyên dương m lớn nhất là:" +m);