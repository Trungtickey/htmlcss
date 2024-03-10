function books(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.isAvailable = true;
}
books.prototype.borrow = function() {
    if (this.isAvailable) {
        this.isAvailable = false;
        return true; // Mượn sách thành công
    } else {
        return false; // Sách đã được mượn
    }
};
books.prototype.returnBook = function(){
    this.isAvailable = true;
};
// Định nghĩa đối tượng thư viện
function Library() {
    this.books = [];
}

// Thêm sách vào thư viện
Library.prototype.addBook = function(book) {
    this.books.push(book);
};

// Kiểm tra xem một cuốn sách cụ thể có sẵn để mượn hay không
Library.prototype.isBookAvailable = function(title) {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].title === title && this.books[i].isAvailable) {
            return true;
        }
    }
    return false;
};
// Tạo một số đối tượng sách
let book1 = new books("Thiên đường tung tăng", "Jiraiya", 1999);
let book2 = new books("Đời lạc lối", "OneKill", 2018);
let book3 = new books("Coi Như Bỏ", "Tâm Anh", 2023);

// Thêm chúng vào thư viện
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Mượn một cuốn sách
let bookToBorrow = "Thiên đường tung tăng";
if (library.isBookAvailable(bookToBorrow)) {
    book1.borrow();
    console.log(bookToBorrow + " đã được mượn.");
} else {
    console.log(bookToBorrow + " không có sẵn để mượn.");
}

// Trả cuốn sách
book1.returnBook();
console.log(bookToBorrow + " đã được trả.");

// Kiểm tra xem cuốn sách có sẵn để mượn hay không
if (library.isBookAvailable(bookToBorrow)) {
    console.log(bookToBorrow + " có sẵn để mượn.");
} else {
    console.log(bookToBorrow + " không có sẵn để mượn.");
}