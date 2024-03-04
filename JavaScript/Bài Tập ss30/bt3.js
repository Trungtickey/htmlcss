var chuoi = prompt("Nhập vào 1 chuỗi bất kì:");
function sortCharacters(chuoi){
    var letters=[];
    var digits=[];
    var specialChars=[];
    // Lặp qua từng kí tự trong chuỗi rồi phân loại chúng
    for( let i=0; i < chuoi.length; i++){
        var char = chuoi.charAt(i);
        if(/[a-zA-Z]/.test(char)){
            letters.push(char);
        } else if(/[0-9]/.test(char)){
            digits.push(char);
        } else {
            specialChars.push(char);
        }
    } 
    return letters.concat(digits, specialChars);
}
console.log("kết quả của mảng sau khi sắp xếp: ", sortCharacters(chuoi));