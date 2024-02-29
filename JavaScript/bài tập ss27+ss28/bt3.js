var mangSoNguyen=[1,2,3,4,5,6,7,8,9,10];
var mangMoi=[];
for(let i=0; i < mangSoNguyen.length;i++){
    if(mangSoNguyen[i] % 2==0){
        mangMoi.push(mangSoNguyen[i]);
    }
}
console.log("Mảng mới khi xóa phần tử lẻ: ", mangMoi);