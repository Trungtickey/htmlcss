let Time =Number(prompt("nhập giờ đê bạn ê"));
if (Time < 10) {
  Time = 0;
} else if (Time < 20) {
  Time= 1;
} else if (Time < 23) {
  Time= 2;
}
switch(Time) {
  case 0:
    alert("Good morning");
    break;
  case 1:
    alert("Good day");
    break;
  case 2:
    alert("Good evening");
    break;
  default:
    alert("Giờ không hợp lệ. Vui lòng nhập giờ từ 0 đến 23.");
    break;
}
// var time = Number(prompt('Vui lòng nhập giờ trong ngày: '));
// switch (true) {
//         case (time < 10):
//                 alert('Good morning');
//                 break;
//         case (time < 20):
//                 alert('Good day');
//                 break;
//         case (time > 20):
//                 alert('Giờ không hợp lệ');
//                 break;
//         default:
//                 alert('Giờ không hợp lệ');
// }