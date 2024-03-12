class Book {
    constructor(title, author, publishedYear){
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    // Hiện thị thông tin sách.
    displayInfo() {
        console.log("Tiêu đề: " + this.title + ", Tác Giả: " + this.author + ", Năm xuất bản: " + this.publishedYear);
    }
}

// Định nghĩa đối tượng thư viện
class Library {
    constructor(){
        this.books=[];
    }
    // Phương thức hiện thị danh sách sách trong thư viện.
    addBook(book){
        this.books.push(book);
    }
    displayBooks(){
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {book.displayInfo()});
    }
}

// Tạo đối tượng thư viện
const library = new Library();

// Tạo thêm các đối tượng sách
const book1 = new Book("Trận Sau Làm Lại", "Trung Tickey", 2024);
const book2 = new Book("Đời Lạc Lối", "Tâm Anh", 2023);
const book3 = new Book("Ăn Ngủ Cùng Phim 'Hành Động'", "ní Nhựt Hào", 2024);

// Thêm sách vào thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.displayBooks();