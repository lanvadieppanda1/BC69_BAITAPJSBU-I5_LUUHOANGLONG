document.getAnimations("btnResult").onclick = function () {
    // Lấy giá trị điểm từ các input
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);

    // Lấy giá trị khu vực và đối tượng
    let area = parseInt(document.getElementById('area').value);
    let category = parseInt(document.getElementById('category').value);

    // Điểm chuẩn
    let passingScore = 25;
    // kết quả
    let result = document.getElementById('result');

    // Kiểm tra nếu có môn nào điểm 0 thì rớt
    if (subject1 === 0 || subject2 === 0 || subject3 === 0) {
        result.innerText = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;;
        return;
    }

    // Tính tổng điểm
    let totalScore = subject1 + subject2 + subject3 + area + category;

    // Kiểm tra tổng điểm với điểm chuẩn
    if (totalScore >= passingScore) {
        result.innerText = `Bạn đã đậu. Tổng điểm: ${totalScore}`;
    } else {
        result.innerText = `Bạn đã rớt. Tổng điểm: ${totalScore}`;
    }
};