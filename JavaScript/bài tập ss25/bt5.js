var n =Number(prompt("Nhập số nguyên n"));
    if (isNaN(n)) {
        alert("Nhập sai kìa thồn lằng, nhập lại đi ku");
    }
    
    var countEven = 0;
    var digit;
    
    // Đếm số chữ số chẵn trong n
    n = Math.abs(n); // Chuyển đổi n thành giá trị tuyệt đối để đảm bảo xử lý các số âm
    while (n > 0) {
        digit = n % 10;
        if (digit % 2 === 0) {
            countEven++;
        }
        n = Math.floor(n / 10);
    }
    console.log("Number of even digits:", countEven);