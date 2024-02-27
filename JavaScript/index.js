// Có 3 cách để đưa JS vào HTML
//Cách 1: Inline
//<button onclick="alert('Xin chào Trung Tickey!')">Alert</button>
//Cách 2: Internal
//<header><h1>Module 13 - JavaScript basic</h1></header>
// <script>alert("Hi bro I'm Trung Tickey");</script>
//Cách 3: External
//alert("Hi ku! Tao tên Tickey!!!");
//primitive(tham trị: undefined, string, boolen, symbol, null); 
//unprimitive(tham chiếu:object, array, )

// const a = 5
// console.log(a)
// alert("Hi ku! Tao tên Tickey!!!");
// cú pháp khai báo biến: var, let, const.
// Var: có thể khai báo lại, có thể gán lại giá trị (variable)
// Let: không thể khai báo lại, có thể gán lại giá trị
// const: không thể khai báo lại, không thể gán lại giá trị
// let b = 15;
// let c;
// var username = Tickey;

// c = 30;
// b = 20;

// console.log(b);
// console.log(c);
// console.log(username);
const mark = Number(prompt("Nhập vào điểm học sinh"));
if(mark >= 8){
    alert("Học sinh giỏi");
} else if ( mark<8 && mark >=7 ) {
    alert("Học sinh khá");
} else if (mark <7 && mark >=5){
    alert("Học sinh trung bình")
} else {
    alert("Học sinh yếu");
}