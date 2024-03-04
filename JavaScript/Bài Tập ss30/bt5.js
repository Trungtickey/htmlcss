var chuoi = prompt("Nhập một chuỗi kí tự bất kì: ");
function vietHoaChuCaiCuoi(chuoi){
     // Tách chuỗi thành mảng các từ
     var words = chuoi.split(" ");
     var result = "";
 
     // Duyệt qua mỗi từ trong mảng
     for (var i = 0; i < words.length; i++) {
         var word = words[i];
         // Nếu từ có ít nhất 1 ký tự
         if (word.length > 0) {
             // Viết hoa ký tự cuối cùng của từ
             var lastChar = word.slice(-1).toUpperCase();
             // Ghép các ký tự của từ trừ ký tự cuối cùng và ký tự cuối cùng viết hoa lại
             var capitalizedWord = word.slice(0, -1) + lastChar;
             // Nếu từ không phải là từ cuối cùng trong chuỗi thì thêm dấu cách vào sau từ
             if (i < words.length - 1) {
                 result += capitalizedWord + " ";
             } else {
                 // Nếu từ là từ cuối cùng thì không thêm dấu cách
                 result += capitalizedWord;
             }
         }
     }
     return result;
}
console.log(vietHoaChuCaiCuoi(chuoi));