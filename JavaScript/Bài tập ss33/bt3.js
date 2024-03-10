var bookphone = {
    contact1: {
        name: "Trung Tickey",
        phone: "0357007083",
        email: "hocongthanhtrungvn@gmail.com",
    },
    contact2: {
        name: "Phan Nhựt Hào",
        phone: "0862536828",
        email: "ohayo123@gmail.com",
    },
}
for (let key in bookphone) {
    console.log(key + ": ");
    console.log("Name: " + bookphone[key].name);
    console.log("Phone: " + bookphone[key].phone);
    console.log("Email: " + bookphone[key].email);
    
}