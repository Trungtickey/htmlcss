var a=Number(prompt("Nhập vào 2 số nguyên a"));
var b=Number(prompt("Nhập vào 2 số nguyên b"));
const arr=[];
if(isNaN(a) && isNaN(b)){
    alert("Nhập lại đi bạn êi");
}
var min=Math.min(a,b);
var max=Math.max(a,b);
for (let i=min; i<=max; i++){
    arr.push(i);
}
console.log("Dãy số nằm giữa khoảng a và b: ", arr);