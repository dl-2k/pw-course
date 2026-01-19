//1 Tính tổng 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("Tong tu 1 den 100 la:", sum);
console.log("===================");

//2 In bang cuu chuong từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i} gom`);
    for (let j = 1; j <= 10; j++) {
        result = i * j;
        console.log(result);
    }
}
console.log("===================");

//3 Tạo 1 mảng chứa các số lẻ từ 1 đến 99
const mangChuaSoLe = [];
for (let i = 0; i <= 99; i++) {
    if (i % 2 !== 0) {
        mangChuaSoLe.push(i);
    }
}
console.log(mangChuaSoLe);
console.log("===================");


//4 In ra 10 email dựa trên tên người dùng và số thứ tự
//Example: user1@example.com,user2@example.com,...,user3@example.com,user4@example.com)
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}
console.log("===================");


//5 Tinh tổng doanh thu 12 tháng trong năm dựa trên các mảng doanh thu đã cho và in ra tổng doanh thu
// Biết cấu trúc object doanh thu {"month":2, "total":100}
const mangTongDoanhThu = [];
let tongDoanhThu = 0;
for (let i = 1; i <= 12; i++) {
    const doanhthu = {
        "month": i,
        "total": 100 * i
    }
    mangTongDoanhThu.push(doanhthu.total);
}
// console.log(mangTongDoanhThu);
// console.log(mangTongDoanhThu.length);
for (let i = 0; i < mangTongDoanhThu.length; i++) {
    tongDoanhThu = tongDoanhThu + mangTongDoanhThu[i];
}
console.log(`Tong doanh thu 12 thang ${tongDoanhThu}`);
console.log("===================");

