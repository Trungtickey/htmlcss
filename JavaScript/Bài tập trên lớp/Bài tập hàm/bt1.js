var chuoi = prompt("Nhập một chuỗi bất kỳ:");
var mangChuoiCon = [];
console.log("Các chuỗi con của " + chuoi + " là:");
for( var i =0; i <chuoi.length; i++){
    for(var j=0; j<=chuoi.length;j++);{
        mangChuoiCon.push(chuoi.substring(i,j));
    }
}
console.log("Mảng chuỗi sau là: ", mangChuoiCon);