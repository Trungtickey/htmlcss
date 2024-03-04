var arr = prompt("Nhập vào 1 chuỗi:");
    var a = prompt("Nhập vào 1 kí tự bất kì");
    let count = 0;

function dungHam(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == a){
            count++;
        }
    }
    console.log("Số lần xuất hiện của ký tự "+ a +"trong chuỗi là ",count);
}
dungHam(arr)