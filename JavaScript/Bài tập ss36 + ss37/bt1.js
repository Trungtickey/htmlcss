document.getElementById('addAnswer').addEventListener('click', function(){
    var answerInput = document.getElementById('itemInput').value;
    var message = document.getElementById('message');

    if (answerInput.length > 10) {
        message.innerText = "Câu trả lời không hợp lệ! Độ dài câu trả lời phải nhỏ hơn hoặc bằng 10 ký tự.";
        message.style.color = 'red';
      } else {
        message.innerText = "Câu trả lời hợp lệ! Độ dài câu trả lời nhỏ hơn hoặc bằng 10 ký tự.";
        message.style.color = 'green';
      }
});