var findLongestWordLength = ("The quick brown fox jumped over the lazy dog");
var ketQua = timTuDaiNhat(findLongestWordLength);

function timTuDaiNhat(findLongestWordLength) {
    var tu = findLongestWordLength.split(" ");
    var tuDaiNhat = "";
    var doDaiTuDaiNhat = 0;

    for (var i = 0; i < tu.length; i++) {
        if (tu[i].length > doDaiTuDaiNhat) {
            tuDaiNhat = tu[i];
            doDaiTuDaiNhat = tu[i].length;
        }
    }
    return [tuDaiNhat, doDaiTuDaiNhat];
}

console.log("Từ dài nhất: " + ketQua[0]);
console.log("Độ dài của từ dài nhất: " + ketQua[1]);