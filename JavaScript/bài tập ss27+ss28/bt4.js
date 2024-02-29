var mangSoNguyen=[1,2,3,4,5,6,7,8,9,10];
var mangMoi1=[];
var mangMoi2=[];
for(let i=0; i < mangSoNguyen.length;i++){
    if(mangSoNguyen[i] % 2==0){
        mangMoi1.push(mangSoNguyen[i]);
    } else {
        mangMoi2.push(mangSoNguyen[i]);
    }
}

console.log("Mảng chẵn: ", mangMoi1);
console.log("Mảng lẻ: ", mangMoi2);