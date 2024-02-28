var mang = [1,2,3,4,5,6,7];
var giaTriCanTim= prompt("Nhập vào giá trị cần tìm kiếm trong mảng:");
var daTimThay = false;
for(var i=0; i< mang.length; i++){
    if(mang[i] == giaTriCanTim){
        console.log("phần tử " + giaTriCanTim + " được tìm thấy tại vị trí ", i , " trong mảng");
        daTimThay = true;
    }
}
if (!daTimThay){
    console.log("Phần tử không tồn tại trong mảng");
}