var arr = prompt("Khai báo mảng ngẫu nhiên:");

function arr(length, min, max){
    var array = [];
    for (let i=0; i < length; i++){
        array.push(Math.floor(Math.random() * (max - min +1)) + min);
    }
    return array; 
}

function mangNgauNhien(arr){
    for(let i=0; i < arr.length/2;i++){
        if(arr[i] !== arr[arr.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log("Kết quả của mảng là: ", mangNgauNhien(arr));