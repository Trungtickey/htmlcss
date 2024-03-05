var searchAuthor=prompt("Nhập tên tác giả:");
var foundBook = false;
const books = [
    {author:"Auth", name:"Coi như bỏ"},
    {author:"Tickey",name:"Tâm anh lạc lối"},
];
for (let i=0; i<books.length;i++){
    if (books[i].author === searchAuthor) {
        console.log("Tên cuốn sách của tác giả", searchAuthor, "là:", books[i].name);
        foundBook = true;
        break;
    }
}
if (foundBook) {
    console.log("Đã tìm thấy sách ");
} else {
   console.log("Không tìm thấy sách");
}