let num=Number(prompt("Nhập 1 số nguyên dương bất kì"));
if(isNan(num) || num <= 0){
    console.log("Số vừa nhập không hợp lệ");
} else {
    let giaithua=1;
    for(let i = 0; i < num; i++){
        giaithua*=i;
    }
    console.log("Giai thừa số vừa nhập là:");
}