var num = [1,2,3,4,5,15,16,17,18,19];
function isPrime(num){
    if(num<=1){
        return false;
    }
    for (let i=2; i<=Math.sqrt(num); i++){
        if(num % i ==0){
            return false;
        }
    }
    return true;
}
function printPrimeNumbers(num){
    var primeNumbers = [];
    for(let i=0; i < num.length; i++){
        if(isPrime(num[i])){
            primeNumbers.push(num[i]);
        }
    }
    return primeNumbers;
}
console.log("Các số nguyên tố trong mảng đã khai báo: ",printPrimeNumbers(num));