const num = Number(prompt("Nhập số"));
if (num % 2==0){
    alert("số chẵn");
} else if(num % 2 !== 0){
    alert("số lẻ");
} else {
    alert("số không hợp lệ");
}