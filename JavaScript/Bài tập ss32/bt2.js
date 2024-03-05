// var maId =Number(prompt("Nhập mã id:"));
// var ten=prompt("Nhập tên:");
// var sdt=Number(prompt("Nhập số điện thoại:"));
// var diaChi=prompt("Nhập địa chỉ nhà:");
const information = {
    id: 1,
    name: "Trung",
    phone: "9280592368",
    address: "jaslgj",
    email: Email,
};
delete information.address;
var Email=prompt("Nhập địa chỉ email");
// console.log("ID:", information.id);
// console.log("Name:", information.name); 
// console.log("Phone:", information.phone); 
// console.log("Email:", information.email); 
for (let key in information) {
    console.log(key +": " + information[key]);
}