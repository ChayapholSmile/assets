function calculate() {
    const idNumber = document.getElementById('id-number').value;
    if (idNumber.length !== 12 || isNaN(idNumber)) {
        alert('กรุณากรอกเลขบัตร 12 หลักแรกให้ถูกต้อง');
        return;
    }

    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(idNumber.charAt(i)) * (13 - i);
    }
    const checkDigit = (11 - (sum % 11)) % 10;

    const result = document.getElementById('result');
    result.innerHTML = `หลักที่ 13 คือ: ${checkDigit}`;

    // Animation
    result.style.animation = 'fadeIn 1s ease-in-out';
    result.addEventListener('animationend', () => {
        result.style.animation = '';
    });
}
