var arr=[1,2,3,'Tickey',4,5,6,'Trung'];
var docNhat = null;
for (var i=0; i < arr.length;i++){
    var count = 0;
    for (var j=0; j < arr.length;j++){
        if(arr[i] == arr[j]){
            count++;
        }
    }
    if(count==1){
        docNhat = arr[i];
        break;
    }
}
if( docNhat !== null){
console.log("Phần tử độc nhất trong mảng là: ", docNhat);
} else {
    console.log("Không có phần tử độc nhất trong mảng");
}