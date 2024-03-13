function displayContent(){
    var inputText = document.getElementById("inputField").value;

    // Sử dụng innerHTML để thêm nội dung vào div content1
    document.getElementById("content1").innerHTML="Cách 1: Sử dụng innerHTML " + inputText;

    // Tạo 1 nút văn bản mới và thêm nó vào div content2
    var newText = document.createTextNode("Cách 2: Sử dụng DOM: " + inputText);
    var content2 = document.getElementById("content2");
    while(content2.firstChild){
        content2.removeChild(content2.firstChild); // Xóa các nút văn bản hiện có
    }
    content2.appendChild(newText); // Thêm nút văn bản mới
}