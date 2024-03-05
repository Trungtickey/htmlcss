function truncateString(str, n) {
    if (str.length > n) {
        return str.substring(0, n) + "...";
    } else {
        return str;
    }
}
console.log(truncateString("Lô ní, I'm Trung Tickey,Who are fucking you (tạm dịch:m là th c hó nào",70));