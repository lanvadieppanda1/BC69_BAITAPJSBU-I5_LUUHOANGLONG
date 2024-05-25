

// bài 1
function checkScore(score) {
    return (score <= 0) ? true : false
}

document.getElementById("btnResult").onclick = function () {
    // Lấy giá trị điểm từ các input
    let subject1 = document.getElementById('subject1').value * 1,
        subject2 = document.getElementById('subject2').value * 1,
        subject3 = document.getElementById('subject3').value * 1;

    // Lấy giá trị khu vực và đối tượng
    let area = document.getElementById('area').value * 1,
        category = document.getElementById('category').value * 1;

    // Điểm chuẩn
    let passingScore = document.getElementById('scoreBase').value * 1;
    // kết quả
    let result = document.getElementById('scoreResult');

    // Tính tổng điểm
    let totalScore = subject1 + subject2 + subject3 + area + category;

    // Tính tổng điểm
    result.innerText = `Bạn đã ${(checkScore(subject1) || checkScore(subject2) || checkScore(subject3)) ? `rớt. Do có điểm nhỏ hơn hoặc bằng 0` :
        (!checkScore(subject1) && !checkScore(subject1) && !checkScore(subject1)) ? ((totalScore >= passingScore) ? `đậu. Tổng điểm: ${totalScore}` : `rớt. Tổng điểm: ${totalScore}`) : ``
        }`;
};

// bài 2
document.getElementById("btnElecBill").onclick = function () {

    // Lấy giá trị điểm từ các input
    let name = document.getElementById("inputName").value,
        inputKw = Number(document.getElementById("inputKW").value),
        reSult = 0,
        kw_1 = 500,
        kw_2 = 650,
        kw_3 = 850,
        kw_4 = 1100,
        kw_5 = 1300;
    0 < inputKw && inputKw <= 50 ? reSult = inputKw * kw_1 :
        inputKw > 50 && inputKw <= 100 ? reSult = 50 * kw_1 + (n - 50) * kw_2 :
            inputKw > 100 && inputKw <= 200 ? reSult = 50 * kw_1 + 50 * kw_2 + (n - 100) * kw_3 :
                inputKw > 200 && inputKw <= 350 ? reSult = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (n - 200) * kw_4 :
                    inputKw > 350 ? reSult = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (n - 350) * kw_5 :
                        alert("Số kw không hợp lệ! Vui lòng nhập lại");

    document.getElementById("elecBill").innerText = `Họ tên: ${name}, Tiền điện: ${reSult.toLocaleString('vi-VN')} VNĐ`;
};

// bài 3
document.getElementById("btnCalcTax").onclick = function () {
    let nm = document.getElementById("inputNm").value,
        salary = document.getElementById("inputSalary").value - 4e6 - 16e5 * document.getElementById("inputUser").value,
        result = 0;
    salary > 0 && salary <= 6e7 ? result = 0.05 * salary :
        salary > 6e7 && salary <= 12e7 ? result = 0.1 * salary :
            salary > 12e7 && salary <= 21e7 ? result = 0.15 * salary :
                salary > 21e7 && salary <= 384e6 ? result = 0.2 * salary :
                    salary > 384e6 && salary <= 624e6 ? result = 0.25 * salary :
                        salary > 624e6 && salary <= 96e7 ? result = 0.3 * salary :
                            salary > 96e7 ? result = 0.35 * salary :
                                alert("Số tiền thu nhập không hợp lệ");
    document.getElementById("taxResult").innerText = `Họ tên: ${nm}; Tiền thuế thu nhập cá nhân: ${result.toLocaleString('vi-VN')} VNĐ`;
}

// bài 4

function disableInput() {
    let value = document.getElementById("cusmType").value,
        result = (value == "company") ? "block" : "none";
    document.getElementById("lblConnect").style.display = result;
    document.getElementById("inputConnect").style.display = result;
}

document.getElementById("btnNet").onclick = function () {

    let cusType = document.getElementById("cusmType").value,
        cusCode = document.getElementById("cusCode").value,
        channelId = document.getElementById("channelId").value,
        inputConnect = document.getElementById("inputConnect").value,
        result = 0;
    "company" == cusType ? result = CalcSum(15, 75, 50, channelId, inputConnect, 5) :
        "user" == cusType ? result = CalcSum(4.5, 20.5, 7.5, channelId, 0, 0) :
            alert("Hãy chọn loại khách hàng");
    document.getElementById("txtNet").innerText = `Mã khách hàng: ${cusCode}; Tiền cáp: ${result.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}`;
}


function CalcSum(invoice, service, premiumFee, channelId, inputConnect, kbn) {
    var m = invoice + service + premiumFee * channelId;
    return inputConnect > 10 ? (m += (inputConnect - 10) * kbn) : m;
}