function displayLocalStorageValues() {
    const valuesList = document.getElementById('valuesList');
    valuesList.innerHTML = ''; // Xóa danh sách hiện tại trước khi thêm vào

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const li = document.createElement('li');
        li.textContent = `Key: ${key}, Value: ${value}`;
        valuesList.appendChild(li);
    }
}

// Gọi hàm để hiển thị giá trị khi trang web được tải
displayLocalStorageValues();