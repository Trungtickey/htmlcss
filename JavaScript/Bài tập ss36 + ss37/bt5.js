document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('addItem').addEventListener('click', () => {
        var itemValue = document.getElementById('itemInput').value;
        if(itemValue) {
            var list = document.getElementById('itemList');
            var listItem = document.createElement('li');
            listItem.textContent = itemValue;
            list.appendChild(listItem);
            document.getElementById('itemInput').value = ''; // Clear input field

            input.style.backgroundColor = 'yellow'; // Đặt lại màu nền cho ô input
        }
    });
});

// Sự kiện thay đổi màu nền khi nhập
var input = document.getElementById('itemInput');
input.addEventListener('input', function(){
    if(input.value.trim()){
        input.style.backgroundColor = 'white';
    } else {
        input.style.backgroundColor = 'yellow';
    }
});
