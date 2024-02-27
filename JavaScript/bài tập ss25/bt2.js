var a=Number(prompt("Nhập số nguyên dương a"));
var b=Number(prompt("Nhập số nguyên dương b"));

if(isNaN(a) && isNaN(b) || a<0 && b<0){
    alert("Sai rồi nhập lại đi ku");
}
var soChan = 0;
var soLe = 0;
for(var i = a+1; i < b; i++){
    if (i % 2==0){
        soChan += i;
    } else {
        soLe +=i;
    }
}
console.log("Tổng các số chẵn:", soChan);
console.log("Tổng các số lẻ:", soLe);
