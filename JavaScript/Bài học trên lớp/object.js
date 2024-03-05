const person={
    firstName: "Trung",
    lastName: "Hồ",
    set fullName(name) {
        const part = name.split(" ");
        this.firstName = part[0];
        this.lastName = part[1];
    },
};
person.fullName = "Tickey Sano";
console.log(person.firstName);
console.log(person.lastName);