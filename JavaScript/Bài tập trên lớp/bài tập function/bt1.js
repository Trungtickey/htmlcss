var arr=(prompt("Nhập số lượng phần tử trong mảng"));
var arr1=[];
for(let i=0; i<arr.length;i++){
    var str=prompt("Nhập 1 chuỗi bất kì:");
    arr1.push(str);
}
function xoaPhanTu(arr1){
    let arr0=[];
    for(let i=0;i<arr.length;i++){
        let isUnique=true;
    for(let j=0;j<arr0.length;j++){
        if(arr[i]===arr0[j]){
            isUnique=false;
            break;
        }
    }
    if(isUnique){
        arr0.push(arr[i]);
    }
    }
    return arr0;
}

let res= xoaPhanTu(arr1);
console.log(res);


