//1 Viet hàm mutiply nhân 2 tham số a,b . In ra kết quả nhân của chúng . Gọi hàm vs 2 cặp giá trị khác nhau
function multiply(a, b) {
    let result = a * b;
    console.log(result);
}
multiply(-2, 200);
multiply(22, 28727.2);
console.log("===================");

//2 Viết hàm findMin nhận 3 tham số a,b,c trả về giá trị nhỏ nhất. Gọi ham và in ra kết qả vs 2 bộ số khác nhau
let min = "";
function findMin(a, b, c) {
    if (a === b && b === c) {
        min = a;
        console.log("3 so bang nhau và gia tri nho nhat la", min);
    }
    else if (a <= b && a <= c) {
        min = a;
        console.log("Gia tri nho nhat la", min);
    } else if (b <= a && b <= c) {
        min = b;
        console.log("Gia tri nho nhat la", min);
    } else {
        min = c;
        console.log("Gia tri nho nhat la", min);
    }
}
findMin(12, 12, 120);
findMin(2, 2, 2);
findMin(-2, 4, 9999);
console.log("===================");


//3 Viết hàm getTopStudents nhận 2 tham só
// students: mảng các object, mỗi object chứa name (tên) và score (điểm)
// threshold: ngưỡng điểm để dc coi là top
// => Hàm trả vè mảng mới chứa tên của những hsinh có điẻm >= threshold.
const students = [
    student1 = {
        nameStudent: "Giau",
        score: 2
    },
    student2 = {
        nameStudent: "Sang",
        score: 5
    },
    student3 = {
        nameStudent: "Phu",
        score: 8.3
    },
    student4 = {
        nameStudent: "Quy",
        score: 9
    },
    student5 = {
        nameStudent: "2026",
        score: 7.2
    }

]
const threshold = 8;
const newStudents = [];
function getTopStudents(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i].score >= b) {
            newStudents.push(a[i]);
        }
    }
    console.log(newStudents);
}
getTopStudents(students, threshold);
console.log("===================");



//4 Viết hàm caculateInterest nhận 3 tham số
// principal: số tiên gửi ban đầu;
// rate: lãi suất hàng năm (phần trăm , ví dụ 5 nghĩa là 5%)
// years: số năm gửi
// Hàm tính và trả về tổng số (gốc + lãi) sau years năm ; sử dụng cthuc: total = principal + principal*rate*years/100
const principal = 2_000_000_000;
const rate = 5;
const years = 20;
function caculateInterest(p, r, y) {
    if (y < 0) {
        console.log("Nam khong the bang 0");
    } else {
        let total = p + p * r * y / 100;
        console.log(total);
    }
}
caculateInterest(principal, rate, years);
