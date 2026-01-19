const car = {
    make: "Toyotal",
    model: "Corolla",
    year: 2021
}
//1 In ra năm sản xuất của xe
console.log(car.year);
console.log("===================");


//2 Tạo object person có thuộc tính name, address(là 1 object lồng vs thuộc tính street, city, country). In ra tên người này
const person = {
    name: "Mike",
    address: {
        street: "LA street",
        city: "Long An",
        country: "Viet Nam"
    }
}
console.log(person.name);
console.log("===================");


//3 Tạo một object student và truy cấp đến điểm toán (math) sử dụng ngoặc vuong.
// Biết object student gồm 2 thuộc tính: name vs grades; grades là 1 object với thuộc tính number: math và english
const student = {
    name: "Antony",
    grades: {
        math: 5.5,
        english: 6.6
    }
}
console.log(student["grades"]["math"]);
console.log("===================");



//4 thay đổi volume và in ra object mới
const settings = {
    volume: 299,
    brightness: 300
}
console.log("Object cũ là", settings);
settings.volume = 777;
console.log("Object mới là", settings);
console.log("===================");


//5 Tạo một object bike và sau đó thêm thuộc tính color vào object đó
const bike = {
}
bike.color = "green";
console.log(bike);

//6 tạo 1 object employee vs thuộc tính: name, age ; xoá thuộc tính age khỏi object
const employee = {
    name: "Luiz",
    age: 21
}
delete employee.age;
console.log(employee);
console.log("===================");


//7
const classA = ["An", "Bình", "Châu"];
const classB = ["Đào", "Hương", "Giang"];
const school = {
    classA,
    classB
}
console.log("Class A gồm: ", school.classA);
console.log("Class A gồm:", school.classB);