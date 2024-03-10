let human={
    name:"",
    age:"",
    address:"",
}

human.name=prompt('Nhập tên:');
human.age=Number(prompt('Nhập tuổi:'));
human.address=prompt('Nhập địa chỉ');

delete human.age;
human.date=prompt('Nhập ngày sinh:');

console.log('Tên: ' + human.name);
console.log('Ngày sinh: ' + human.date);
console.log('Địa chỉ: ' + human.address);