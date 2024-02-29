var chuoi = prompt("Nhập một chuỗi bất kỳ:");
var mangChuoiCon = [];
console.log("Các chuỗi con của" + chuoi + "là:");
for( var i =0; i <chuoi.length; i++){
    for(var j=0; j<=chuoi.length;j++);{
        mangChuoiCon.push(chuoi.substring(i,j));
    }
}
console.log("Mảng chuỗi sau là:", mangChuoiCon);
let nhapchuoi = prompt("Nhập vào một chuỗi bất kì: ");
let mangchuoi = [];

for (let i = 0; i < nhapchuoi.length; i++) {
    let subStr = '';
    for (let j = i; j < nhapchuoi.length; j++) {
        subStr += nhapchuoi[j];
        mangchuoi.push(subStr);
    }
}

console.log("Chuỗi bạn vừa nhập có chuỗi kí tự như sau: ",mangchuoi);