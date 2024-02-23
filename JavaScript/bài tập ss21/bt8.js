var weight =Number(prompt("Nhập chỉ số cân nặng(theo kg):"));
var height=Number(prompt("Nhập chỉ số chiều cao(theo m):"));
var BMI = weight/(height^2);
alert('Bmi của bạn là' + BMI);
// if ( BMI < 18.5){
//     alert("Gầy");
// } else if(BMI>=18.5 && BMI<=24.9){
//     alert("Bình thường");
// } else if(BMI>=25){
//     alert("Thừa cân");
// } else if (BMI > 25 && BMI <=29.9){
//     alert("Tiền béo phì");
// } else if (BMI>= 30 && BMI<=34.9){
//     alert("Béo phì độ I");
// } else if (BMI>35 && BMI<39.9){
//     alert("Béo phì độ II");
// } else {
//     alert("Béo phì độ III");
// }
switch(true){
    case (BMI < 18.5):
        alert("Gầy");
        break;
    case (BMI>=18.5 && BMI<=24.9):
        alert("Bình thường");
        break;
    case (BMI == 25):
        alert("Thừa cân");
        break;
    case (BMI > 25 && BMI <=29.9):
        alert("Tiền béo phì");
        break;
    case (BMI>= 30 && BMI<=34.9):
        alert("Béo phì độ I");
        break;
    case (BMI>35 && BMI<39.9):
        alert("Béo phì độ II");
        break;
    default:
        alert("Béo phì độ III");
        break; 

}