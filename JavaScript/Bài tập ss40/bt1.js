document.addEventListener("DOMContentLoaded", function() {
    // Lấy danh sách thông tin từ Local Storage khi trang được tải
    displaySavedInfo();

    const form = document.getElementById("infoForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn việc submit form mặc định

        // Lấy thông tin từ form
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;

        // Tạo đối tượng thông tin cá nhân
        const infoObject = {
            name: name,
            age: age,
            email: email
        };

        // Lưu đối tượng vào Local Storage
        saveInfo(infoObject);

        // Hiển thị lại danh sách thông tin
        displaySavedInfo();

        // Xóa nội dung trong form
        form.reset();
    });
});

function saveInfo(infoObject) {
    let infoList = JSON.parse(localStorage.getItem("infoList")) || [];
    infoList.push(infoObject);
    localStorage.setItem("infoList", JSON.stringify(infoList));
}

function displaySavedInfo() {
    const infoListElement = document.getElementById("infoList");
    infoListElement.innerHTML = "";
    
    let infoList = JSON.parse(localStorage.getItem("infoList")) || [];
    infoList.forEach(function(info) {
        const listItem = document.createElement("li");
        listItem.textContent = `Họ và tên: ${info.name}, Tuổi: ${info.age}, Email: ${info.email}`;
        infoListElement.appendChild(listItem);
    });
}