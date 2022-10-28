// bài 1:
var mucthue_1 = 0.05;
var mucthue_2 = 0.1;
var mucthue_3 = 0.15;
var mucthue_4 = 0.20;
var mucthue_5 = 0.25;
var mucthue_6 = 0.30;
var mucthue_7 = 0.35;

var tienThue_1 = 0;
var tienThue_2 = 0;
var tienThue_3 = 0;
var tienThue_4 = 0;
var tienThue_5 = 0;
var tienThue_6 = 0;
var tienThue_7 = 0;




var tongtien = 0;
document.getElementById("tinhtien").onclick = function(){
    var hoten = document.getElementById("hoten").value
    var tongthunhap = document.getElementById("tongthunhap").value * 1
    var songuoi = document.getElementById("songuoi").value * 1
    var tienphuthuoc = songuoi * 1600000
    var thunhapchiuthue = tongthunhap - 4000000
    if(0 < thunhapchiuthue && thunhapchiuthue <= 60000000){
        tienThue_1 = tinhThue_1(thunhapchiuthue, mucthue_1)
        tongtien = tienThue_1 - tienphuthuoc
    }else if(60000000 < thunhapchiuthue && thunhapchiuthue <= 120000000){
        tienThue_1 = tinhThue_1(thunhapchiuthue, mucthue_1)
        tienThue_2 = tinhThue_2(thunhapchiuthue-60000000, mucthue_2)
        tongtien = tienThue_1 + tienThue_2 - tienphuthuoc
    }else if(120000000 < thunhapchiuthue && thunhapchiuthue <= 210000000){
        tienThue_1 = tinhThue_1(60000000, mucthue_1)
        tienThue_2 = tinhThue_2(60000000, mucthue_2)
        tienThue_3 = tinhThue_3(thunhapchiuthue - 120000000, mucthue_3)
        tongtien = tienThue_1 + tienThue_2 + tienThue_3 - tienphuthuoc
    }else if(210000000 < thunhapchiuthue && thunhapchiuthue <= 384000000){
        tienThue_1 = tinhThue_1(60000000, mucthue_1)
        tienThue_2 = tinhThue_2(60000000, mucthue_2)
        tienThue_3 = tinhThue_3(90000000, mucthue_3)
        tienThue_4 = tinhThue_4(thunhapchiuthue - 210000000, mucthue_4)
        tongtien = tienThue_1 + tienThue_2 + tienThue_3 + tienThue_4 - tienphuthuoc
    }else if(384000000 < thunhapchiuthue && thunhapchiuthue <= 624000000){
        tienThue_1 = tinhThue_1(60000000, mucthue_1)
        tienThue_2 = tinhThue_2(60000000, mucthue_2)
        tienThue_3 = tinhThue_3(90000000, mucthue_3)
        tienThue_4 = tinhThue_4(174000000, mucthue_4)
        tienThue_5 = tinhThue_5(thunhapchiuthue-384000000, mucthue_5)
        tongtien = tienThue_1 + tienThue_2 + tienThue_3 + tienThue_4 + tienThue_5 
    }else if(624000000 < thunhapchiuthue && thunhapchiuthue <=960000000){
        tienThue_1 = tinhThue_1(60000000, mucthue_1)
        tienThue_2 = tinhThue_2(60000000, mucthue_2)
        tienThue_3 = tinhThue_3(90000000, mucthue_3)
        tienThue_4 = tinhThue_4(174000000, mucthue_4)
        tienThue_5 = tinhThue_5(240000000, mucthue_5)
        tienThue_6 = tinhThue_6(thunhapchiuthue-624000000, mucthue_6)
        tongtien = tienThue_1 + tienThue_2 + tienThue_3 + tienThue_4 + tienThue_5 + tienThue_6 - tienphuthuoc
    }else if(thunhapchiuthue > 960000000){
        tienThue_1 = tinhThue_1(60000000, mucthue_1)
        tienThue_2 = tinhThue_2(60000000, mucthue_2)
        tienThue_3 = tinhThue_3(90000000, mucthue_3)
        tienThue_4 = tinhThue_4(174000000, mucthue_4)
        tienThue_5 = tinhThue_5(240000000, mucthue_5)
        tienThue_6 = tinhThue_6(336000000, mucthue_6)
        tienThue_7 = tinhThue_7(thunhapchiuthue-960000000, mucthue_7)
        tongtien = tienThue_1 + tienThue_2 + tienThue_3 + tienThue_4 + tienThue_5 + tienThue_6 + tienThue_7 - tienphuthuoc
    }
    document.getElementById("infoTinh").innerHTML = "<p>Họ tên là: "+ hoten + "; "+"Tiền thuế thu nhập cá nhân là: "+ tongtien +"</p>"
}

function tinhThue_1(thunhapchiuthue, mucthue_1){
    var result = thunhapchiuthue * mucthue_1
    return result;
}
function tinhThue_2(thunhapchiuthue, mucthue_2){
    var result = (thunhapchiuthue) * mucthue_2
    return result;
}
function tinhThue_3(thunhapchiuthue, mucthue_3){
    var result = (thunhapchiuthue) * mucthue_3
    return result
}
function tinhThue_4(thunhapchiuthue, mucthue_4){
    var result = (thunhapchiuthue) * mucthue_4
    return result
}
function tinhThue_5(thunhapchiuthue, mucthue_5){
    var result = (thunhapchiuthue)* mucthue_5
    return result
}
function tinhThue_6(thunhapchiuthue, mucthue_6){
    var result = (thunhapchiuthue)* mucthue_6
    return result
}
function tinhThue_7(thunhapchiuthue, mucthue_7){
    var result = (thunhapchiuthue)* mucthue_7
    return result
}

