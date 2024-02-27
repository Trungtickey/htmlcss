var num=Number(prompt("Nhập vào số nguyên dương"));
var sum=0;
if(isNaN(num) && num<0){
    alert("Nhập sai r nhập lại đê bro");
}
for(var i=1; i<=num; i++){
    console.log(i);
    sum +=i;
}
if (sum % 2 !==0){
    console.log("Tổng các số là số lẻ:" +sum);
} else {
    console.log("Tổng các số là số chẵn, cộng thêm" +num + 1 + "để đảm bảo là số lẻ:", sum + num + 1);
}
