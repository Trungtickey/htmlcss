var button = document.getElementById("btn")
button.addEventListener("click", function(){
    if(button.textContent == "OFF"){
        button.textContent = "ON";
    } else {
        button.textContent = "OFF"
    }
    
});