var num=Number(prompt("Nhập số nguyên dương:"));
if(isNaN(num) || num <=0){
    alert("Số vừa nhập không hợp lệ, Vui lòng nhập lại");
} else {
    let a = 0, b = 1;
    console.log("Số fibonacci thứ 0 là: "+ a);
    if(num >1){
        console.log("Số fibonacci thứ 1 là: "+ b);
    } 
    for(let i=2; i<num;i++){
        let c=a+b;
        console.log("Số fibonacci thứ "+i+" là: "+ c);
        a=b;
        b=c;
    }
}    