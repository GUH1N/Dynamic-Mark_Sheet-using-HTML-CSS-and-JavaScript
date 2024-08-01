document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateTotal);
});

function calculateTotal() {
    const sub_1_t = parseInt(document.getElementById("sub_1_t").value) || 0;
    const sub_2_t = parseInt(document.getElementById("sub_2_t").value) || 0;
    const sub_3_t = parseInt(document.getElementById("sub_3_t").value) || 0;
    const sub_4_t = parseInt(document.getElementById("sub_4_t").value) || 0;
    const sub_5_t = parseInt(document.getElementById("sub_5_t").value) || 0;
    const sub_5_p = parseInt(document.getElementById("sub_5_p").value) || 0;
    const sub_6_p = parseInt(document.getElementById("sub_6_p").value) || 0;
    const sub_7_p = parseInt(document.getElementById("sub_7_p").value) || 0;

    const total_1 = sub_1_t;
    const total_2 = sub_2_t;
    const total_3 = sub_3_t;
    const total_4 = sub_4_t;
    const total_5 = sub_5_t + sub_5_p;
    const total_6 = sub_6_p;
    const total_7 = sub_7_p;

    document.getElementById("t_1").textContent = total_1;
    document.getElementById("t_2").textContent = total_2;
    document.getElementById("t_3").textContent = total_3;
    document.getElementById("t_4").textContent = total_4;
    document.getElementById("t_5").textContent = total_5;
    document.getElementById("t_6").textContent = total_6;
    document.getElementById("t_7").textContent = total_7;

    document.getElementById("r_1").textContent = total_1 >= 50 ? "Pass" : "Fail";
    document.getElementById("r_2").textContent = total_2 >= 50 ? "Pass" : "Fail";
    document.getElementById("r_3").textContent = total_3 >= 50 ? "Pass" : "Fail";
    document.getElementById("r_4").textContent = total_4 >= 50 ? "Pass" : "Fail";
    document.getElementById("r_5").textContent = total_5 >= 50 ? "Pass" : "Fail";
    document.getElementById("r_6").textContent = total_6 >= 50 ? "Pass" : "Fail";
    document.getElementById("r_7").textContent = total_7 >= 50 ? "Pass" : "Fail";

    const grandTotal = total_1 + total_2 + total_3 + total_4 + total_5 + total_6 + total_7;
    document.getElementById("g_t").textContent = grandTotal;

    const percentage = (grandTotal / 700) * 100;
    document.getElementById("percent").textContent = percentage.toFixed(2) + "%";

    if (percentage >= 90) {
        document.getElementById("grade").textContent = "A+";
    } else if (percentage >= 80) {
        document.getElementById("grade").textContent = "A";
    } else if (percentage >= 70) {
        document.getElementById("grade").textContent = "B+";
    } else if (percentage >= 60) {
        document.getElementById("grade").textContent = "B";
    } else if (percentage >= 50) {
        document.getElementById("grade").textContent = "C";
    } else {
        document.getElementById("grade").textContent = "F";
    }

    const passSubjects = [total_1, total_2, total_3, total_4, total_5, total_6, total_7].filter(total => total >= 50).length;
    document.getElementById("result").textContent = passSubjects === 7 ? "Pass" : "Fail";
}