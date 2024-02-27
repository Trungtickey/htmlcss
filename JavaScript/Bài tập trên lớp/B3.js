var a=Number(prompt("Nhập vào số nguyên dương a"));
var b=Number(prompt("Nhập vào số nguyên dương b"));
if(isNaN(a) && isNaN(b) || a<0 && b<0){
    alert("Nhập lại số khác đi bạn êi");
}
var chiaHetChoA=[];
var chiaHetChoB=[];

for (var i=1; i<=a; i++){
    if(i % b==0){
        chiaHetChoB.push(i);
    }
}
for (var j=1; j<=b; j++){
    if(j % a==0){
        chiaHetChoA.push(j);
    }
}
console.log('Các số chia hết cho b trong khoảng từ 1 đến ' + a + ': ' + chiaHetChoB);
console.log('Các số chia hết cho a trong khoảng từ 1 đến ' + b + ': ' + chiaHetChoA);