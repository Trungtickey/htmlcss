document.addEventListener('DOMContentLoaded',() =>{
    document.getElementById('createButton').addEventListener('click', () => {
        const studentId = document.getElementById('studentId').value;
        const studentName = document.getElementById('studentName').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        const studentInfoElement = document.getElementById('studentInfo');
        studentInfoElement.innerHTML = ''; // Clear previous student info

        // Kiểm tra dữ liệu
        if (studentId.length !== 6) {
            studentInfoElement.textContent = 'Mã Sinh Viên phải gồm 6 ký tự';
            return;
        }

        if (studentName.trim() === '') {
            studentInfoElement.textContent = 'Vui lòng nhập Tên Sinh Viên';
            return;
        }

        if (age < 18) {
            studentInfoElement.textContent = 'Tuổi phải lớn hơn hoặc bằng 18';
            return;
        }

        const phonePattern = /^[0-9]{10,11}$/;
        if (!phonePattern.test(phone)) {
            studentInfoElement.textContent = 'Số Điện Thoại phải có định dạng là số điện thoại ở VN';
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            studentInfoElement.textContent = 'Email phải có định dạng email';
            return;
        }

        // Hiển thị thông tin sinh viên
        const studentInfo = `
            <h2>Thông Tin Sinh Viên</h2>
            <p><strong>Mã Sinh Viên:</strong> ${studentId}</p>
            <p><strong>Tên Sinh Viên:</strong> ${studentName}</p>
            <p><strong>Tuổi:</strong> ${age}</p>
            <p><strong>Số Điện Thoại:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
        studentInfoElement.innerHTML = studentInfo;
    });
});