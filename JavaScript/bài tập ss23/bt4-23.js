let a = Number(prompt("Nhập số nguyên dương a"));
let b = Number(prompt("Nhập số nguyên dương b"));
for(var i=1; i <=a; i++){
    if(i % b == 0){
        console.log("Là số chia hết cho b", +i);
    }
}