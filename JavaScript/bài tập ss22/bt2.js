const a=Number(prompt("Nhập số cạnh thứ nhất"));
const b=Number(prompt("Nhập số cạnh thứ 2"));
const c=Number(prompt("Nhập số cạnh thứ 3"));
if(a!=0 && b!=0 && c!=0 && a+b>c && a+c>b && b+c>a){
    alert("3 cạnh tam giác hợp lệ");
} else {
    alert("3 cạnh ko hợp lệ");
}

