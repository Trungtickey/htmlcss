const mangSoNguyen=[2,4,6,8,10,1,3,4,7,9];
let min = max = mangSoNguyen[0];
for(let i=1; i < mangSoNguyen.length; i++){
    if(mangSoNguyen[i] < min){
        min = mangSoNguyen[i];
    }
    if(mangSoNguyen[i] > max){
        max = mangSoNguyen[i];
    }
}
console.log("Phần tử lớn nhất trong mảng ", max);
console.log("Phần tử nhỏ nhất trong mảng ", min);