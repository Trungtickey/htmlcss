// Mảng chứa các mục danh sách
var listItems = ['List item number 1', 'List item number 2', 'List item number 3'];

// Hàm để thêm mục vào danh sách
function addListItem(item) {
  var ul = document.getElementById('myList');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
}

// Thêm mỗi mục trong mảng vào danh sách UL
listItems.forEach(addListItem);