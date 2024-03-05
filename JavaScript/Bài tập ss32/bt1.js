var maId =Number(prompt("Nhập mã id:"));
var ten=prompt("Nhập tên:");
var sdt=Number(prompt("Nhập số điện thoại:"));
var diaChi=prompt("Nhập địa chỉ nhà:");
const information = {
    id: maId,
    name:ten,
    phone:sdt,
    address:diaChi,
};
console.log("ID:", information.id);
console.log("Name:", information.name); 
console.log("Phone:", information.phone); 
console.log("Address:", information.address); 