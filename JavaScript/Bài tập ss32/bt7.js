var user = [];
function createUser(){
    var id = prompt("Nhập mã ID:");
    var name = prompt("Nhập tên:");
    var email = prompt("Nhập Email:");
    var password = prompt("Nhập mật khẩu:");

    if(!name&&!email&&!password){
        alert("Tên, email và mật khẩu không được để trống!");
        return;
    }
    if(name.length<2){
        alert("Tên không được ngắn hơn 2 kí tự");
        return;
    }
    let emailRegex = /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/;
    if(!emailRegex.test(email)){
        alert("Email không đúng định dạng");
        return;
    }
    if (password.length < 8) {
        alert("Mật khẩu tối thiểu 8 ký tự!");
        return;
    }

    users.push({id, name, email, password});
}
createUser();

console.log(users);
