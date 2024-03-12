var listItems = ['Nguyễn Văn A', 'Vũ Thị B', 'Trần Minh C'];
// Hàm để thêm mục vào danh sách
function addListItem(item) {
    var ul = document.getElementById('myList');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  }
  
  // Thêm mỗi mục trong mảng vào danh sách UL
  listItems.forEach(addListItem);