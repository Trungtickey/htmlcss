var maId =Number(prompt("Nhập mã id:"));
var ten=prompt("Nhập tên:");
var giaTri=Number(prompt("Nhập giá trị:"));
var chatLuong=prompt("Nhập chất lượng:");
const product = {
    id: maId,
    name:ten,
    price:giaTri,
    quantity:chatLuong,
};
console.log("ID:", product.id);
console.log("Name:", product.name); 
console.log("Price:", product.price); 
console.log("Quantity:", product.quantity); 