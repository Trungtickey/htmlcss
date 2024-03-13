function calculateSum() {
    // Lấy giá trị từ hai ô input đầu tiên
    var num1 = parseFloat(document.getElementById("input1").value);
    var num2 = parseFloat(document.getElementById("input2").value);

    // Tính tổng
    var sum = num1 + num2;

    // Hiển thị kết quả vào ô input thứ ba bằng hai cách khác nhau

    // Cách 1: Sử dụng thuộc tính value
    document.getElementById("input3").value = "Tổng (Cách 1): " + sum;

    // Cách 2: Sử dụng DOM để tạo nút văn bản và thêm vào ô input thứ ba
    var resultText = document.createTextNode("Tổng (Cách 2): " + sum);
    var num3 = document.getElementById("input3");
    while (num3.firstChild) {
        num3.removeChild(num3.firstChild); // Xóa các nút văn bản hiện có
    }
    num3.appendChild(resultText); // Thêm nút văn bản mới
}