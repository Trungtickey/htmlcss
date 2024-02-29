// const chuoiBatKy=[1,2,3,4,5,6,7,8,9];
// function demChuoiKyTu(cou){
//     return cou.length;
// } 
// const soKyTu = demChuoiKyTu(chuoiBatKy);
// console.log("Số ký tự không tính ký tự trống là: ", soKyTu);
var chuoikitu = prompt("Nhập chuỗi kí tự bạn muốn nhập vào: ");
var kitunhap = demSoKyTuKhongKhoangTrang(chuoikitu);

function demSoKyTuKhongKhoangTrang(chuoikitu) {
    let soKyTu = 0;
    for (let i = 0; i < chuoikitu.length; i++) {
        if (chuoikitu[i] !== ' ') {
            soKyTu++;
        }
    }
    return soKyTu;
}
console.log("Số ký tự trong chuỗi (không tính khoảng trắng) là: ", kitunhap);
