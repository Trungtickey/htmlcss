const a=Number(prompt("Nhập số a"));
const b=Number(prompt("Nhập số b"));
if (a % b ==0){
    alert("a chia hết cho b");
} else if (b % a==0){
    alert("b chia hết cho a");
} else {
    alert("nhập lại số");
}

