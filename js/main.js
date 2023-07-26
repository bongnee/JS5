/**
 * 50kw đầu = 500*soKw
 * 50kw kế = 500*50 + 650*(soKw-50)
 * 100 kw kế= 500*50 + 650*50 + 850*(soKw-50-50)
 * 150 kw kế= 500*50 + 650*50 + 850*100 + 1100*(soKw-50-50-100)
 * còn lại= 500*50 + 650*50 + 850*100 + 1100*150 + (soKw-50-50-100-150)*1300
 */


function tinhTheoKw() {
    var ten = document.getElementById("ten").value;
    var soKw = document.getElementById("soKw").value;
    var tien = 0;
    if (soKw>0 && soKw<=50) {
        tien= 500*soKw;       
    }else if (soKw>50 && soKw<=100) {
        tien = 500*50 + 650*(soKw-50);
        
    }else if (soKw>100 && soKw<=200) {
        tien = 500*50 + 650*50 + 850*(soKw-50-50);
    }else if (soKw >200 && soKw<=350) {
        tien = 500*50 + 650*50 + 850*100 + 1100*(soKw-50-50-100);
    }else if (soKw>350) {
        tien = 500*50 + 650*50 + 850*100 + 1100*150 + (soKw-50-50-100-150)*1300;
    }else{
        alert("số Kw không hợp lệ")
    }
    
    document.getElementById("txtTien").innerHTML = ten + "<br> Tiền điện: " + tien.toLocaleString()+"d";
}

document.getElementById("btnTien").onclick = tinhTheoKw;


