var mang = prompt("Khai báo mảng số nguyên");
var soCanTim = parseInt(prompt("Nhập vào số nguyên cần kiểm tra:"));

var dem = 0;
for (var i = 0; i < mang.length; i++) {
    if (mang[i] === soCanTim) {
        dem++;
    }
}
console.log("Số " + soCanTim + " xuất hiện " + dem + " lần trong mảng.");