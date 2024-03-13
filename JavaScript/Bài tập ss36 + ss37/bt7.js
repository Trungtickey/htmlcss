function calculate(){
    var operator = document.getElementById("operator").value;
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;
    switch(operator){
        case "Cộng":
                result = num1 + num2;
                break;
            case "Trừ":
                result = num1 - num2;
                break;
            case "Nhân":
                result = num1 * num2;
                break;
            case "Chia":
                result = num1 / num2;
                break;
            default:
                result = "Invalid operator";
    }
    document.getElementById("result").innerText = "Kết quả: " + result;
}