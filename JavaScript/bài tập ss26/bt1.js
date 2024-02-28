var A = [1.2,3.4, "Tickey", "CR7",5.6,7.8];
var coSoNguyen = false;
console.log("Các số nguyên trong mảng:");
for(var i=0;i < A.length; i++){
    if(Number.isInteger(A[i])){
        console.log(A[i]);
        coSoNguyen = true;
    }
}
if(!coSoNguyen){
    console.log("Trong mảng không tồn tại số nguyên");
}