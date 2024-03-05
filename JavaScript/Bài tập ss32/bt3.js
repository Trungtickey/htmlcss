 let n = Number(prompt("Nhập vào số lượng sinh viên"));
 let students = {};
  for (var i = 0; i < n; i++) {
    let id = prompt("Nhập mã sinh viên thứ: " + (i+1) + ": ");
    let name = prompt("Nhập tên sinh viên thứ " + (i+1) + ": ");
    students["id" + (i + 1)]=id;
    students["name" + (i + 1)]=name;
}
console.log("Danh sách sinh viên sau khi cập nhật số lượng và thông tin: ");
for (let i = 1; i <= n; i++) {
    console.log("Sinh viên " + i + ":");
    console.log("ID: " + students["id" + i]);
    console.log("Name: " + students["name" + i]);
}