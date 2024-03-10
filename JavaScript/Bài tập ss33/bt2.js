// let n =Number(prompt("Nhập số lượng danh bạ liên hệ"));
// let contact = {
//     name: Name,
//     phone: phone,
//     email: email,
    
// };
// for (var i=0; i<n; i++){
//     let Name = prompt("Nhập tên thứ: " + (i+1) + ": ");
//     let phone =Number(prompt("Nhập số diện thoại: " + (i+1) + ": "));
//     let email= prompt("Nhập địa chỉ email: " + (i+1) + ": ");
//     contact["Tên" + (i + 1)]=name,
//     contact["SDT" + (i + 1)]=phone,
//     contact["Email" + (i + 1)]=email;
// }
// console.log("Danh bạ liên lạc sau khi cập nhật: ");
// // for(let key in contact){
// //     console.log(key +": ");
// //     console.log("Tên: " + contact[key].Name);
// //     console.log("SDT: " + contact[key].phone);
// //     console.log("Email " + contact[key].email);
// // }
// console.log("Tên: ", contact.name);
// console.log("SDT: ", contact.phone);
// console.log("Email: ", contact.email);
var bookphone = {
    contact1: {
        name: "Trung Tickey",
        phone: "0357007083",
        email: "hocongthanhtrungvn@gmail.com",
    },
    contact2: {
        name: "Phan Nhựt Hào",
        phone: "0862536828",
        email: "ohayo123@gmail.com",
    },
}
for (let key in bookphone) {
    console.log(key + ": ");
    console.log("Name: " + bookphone[key].name);
    console.log("Phone: " + bookphone[key].phone);
    console.log("Email: " + bookphone[key].email);
    
}

