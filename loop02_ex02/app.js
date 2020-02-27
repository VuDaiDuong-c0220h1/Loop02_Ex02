function showMess() {
    let num = parseInt(prompt("Nhập số nguyên dương:"));
    let result = 1;
    if (num < 1) {
        alert("Vui lòng nhập số nguyên dương");
        return showMess();
    } else {
        for (count = 1; count <= num; count++) {
            result = result * count;
        }
    }
    alert(result);
}
