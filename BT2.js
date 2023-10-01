//bai 1
function bai_1() {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 1; i < 10; i++) {
        {
            c = a + b;
            a = b;
            b = c;
        }
        document.write(c + "  ")
    }
}
//bai 2
function bai_2() {
    let gt = 1
    let a = +prompt('nhap giai thua')

    if (a == 1 || a == 0) {
        alert(gt + '')
    } else if (a < 0) {
        alert("loi")
    } else if (a > 1) {
        for (let i = 2; i <= a; i++) {
            gt = gt * i
        }
        alert(gt + '')
    }
}
function bai_3() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("*")
        }
        document.write("<br>")
    }

    document.write("<br><br>")

    for (let i = 5; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            document.write("*")
        }
        document.write("<br>")
    }
    document.write("<br><br>")

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= 5; j++) {
            if (j < 5 - i) {
                document.write("")
            } else {
                document.write("*")
            }
        }
        document.write("<br>")
    }

    document.write("<br><br>")

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= 5; j++) {
            if (j < i + 1) {
                document.write("")
            } else {
                document.write("*")
            }
        }
        document.write("<br>")
    }

    document.write("<br><br>")
}
function bai_4() {
    for (let i = 0; i <= 7; i++) {
        if (i == 0 || i == 7) {
            for (let j = 0; j <= 20; j++) {
                document.write("*")
            }
        } else {
            for (let j = 0; j <= 20; j++) {
                if (j == 0 || j == 20) {
                    document.write("*")
                } else {
                    document.write("")
                }
            }
        }
        document.write("<br>")
    }
}
function bai_5() {
    let sotien = +prompt("Nhập số tiền gửi ngân hàng lãi suất 5%/năm")
    let sothang = +prompt("Nhập số tháng gửi")
    let tienlai_thang = 0
    let tongtienlai = tienlai_thang
    document.write("Số tiền bạn gửi là " + sotien + " VNĐ trong " + sothang + " tháng với lãi suất 5%/ năm" + "<br>")
    for (let i = 0; i < sothang; i++) {
        tienlai_thang = ((sotien * 5) / 100) / 12
        tongtienlai += tienlai_thang
        sotien += tienlai_thang
        document.write("Tiền lãi tháng " + (i + 1) + " là " + tienlai_thang + " VNĐ<br>")
    }
    document.write("Tổng tiền lãi trong " + sothang + " là " + tongtienlai + " VNĐ")
}






