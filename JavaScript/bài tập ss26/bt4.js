var a=Number(prompt("Nhập số nguyên dương a"));
var b=Number(prompt("Nhập số nguyên dương b"));
if(isNaN(a)&&isNaN(b) || a<=0 && b<=0 ){
    alert("nhập sai rồi nhập lại đi bro");
}
var chiaHetA=[];
var chiaHetB=[];

for (var i=1; i<=a; i++){
    if(i % b ==0){
        chiaHetB.push(i);
    }
}
for (var j=1; j<=b; j++){
    if(j % a==0){
        chiaHetA.push(j);
    }
}
console.log('Các số chia hết cho b trong khoảng từ 1 đến ' + a + ': ' + chiaHetB);
console.log('Các số chia hết cho a trong khoảng từ 1 đến ' + b + ': ' + chiaHetA);