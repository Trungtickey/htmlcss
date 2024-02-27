var num=Number(prompt("Nhập vào số nguyên dương bất kì:"));
if(isNaN(num) || num<=0){
    alert("Số vừa nhập đéo phải rồi bro, nhập lại đi ku");
} else{
    console.log("Bình phương các số nguyên dương chẵn từ 1 đến", num, "là:");
for(var i=2; i<=num; i+=2){
    console.log(i**2);
}
}