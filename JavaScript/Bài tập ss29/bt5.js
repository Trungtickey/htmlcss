var arr =prompt("Nhập vào 1 chuỗi bất kì:");
var mang=[1,2,3,"CR7", "12A3",4,5,6];
function hamTimKiem(arr, mang){
    var ketQua=[];
    for(var i=0; i < mang.length; i++){
        //Kiểm tra xem chuỗi nhập vào có tồn tại trong phần tử của mảng không
        if(mang[i].indexOf(arr)!==1){
            // Nếu có thì thêm phần tử đó vào mảng kết quả
            ketQua.push(mang[i]);
        }
    }
    return ketQua;
}
console.log("Các phần tử trong mảng có chứa trong chuỗi là: ", hamTimKiem(arr, mang));