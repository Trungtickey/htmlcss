const arr=[2,3,4];
function isEvn(arr){
   for(let i=0; i<arr.length;i++){
    if(arr[i] % 2==0){
        console.log("Số chẵn là: ", arr[i]);
    } else {
        console.log("Số lẻ là: ", arr[i]);
    }
   }
}
isEvn(arr)
