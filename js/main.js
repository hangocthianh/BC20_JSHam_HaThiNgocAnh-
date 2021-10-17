// Quản lý tuyển sinh
// Mô hình 3 khối
// Khối 1:
// - Điểm chuẩn của hội đồng (scoreStandard)
// - Điểm 3 môn: score1, score2, score3
// - điểm uu tiên khu vực: scoreArea
// - điểm ưu tiên đối tượng: scoreObject
// Khối 2:
// - Tính diểm tổng kết (scoreTotal) = score1 + score2 + score3 + scoreArea + scoreObject;
// - So sánh scoreTotal và scoreStandard 
// - In ra kết quả đậu hay rớt (result) và tổng điểm
// Khối 3:
// - Tổng điểm: scoreTotal và kết quả (result)

function totalResult(){
    var score1 = document.querySelector("#score1").value;
    var score2 = document.querySelector("#score2").value;
    var score3 = document.querySelector("#score3").value;
    var scoreArea = document.querySelector("#scoreArea option:checked").value;
    var scoreObject = document.querySelector("#scoreObject option:checked").value;
    var scoreStandard = document.querySelector("#scoreStandard").value;
    var result = "";

    var scoreTotal = Number(score1) + Number(score2) + Number(score3) + Number(scoreArea) + Number(scoreObject);
    if((scoreTotal >= scoreStandard) && (score1 !=0) && (score2 !=0) && (score3 !=0)){
        result = "Đậu";
    } else {
        result = "Rớt";
    }
    document.querySelector("#result").innerHTML = "Tổng điểm: " + scoreTotal + ". Kết quả: " + result;
}
document.querySelector("#btnResult").onclick = totalResult;


// Tính tiền điện
// Khối 1:
// - tên: name
// - số kw: kw
// - Tổng tiền điện: totalElec
// - đơn giá điện
// Khối 2: tính totalElec với các TH:
// - Nếu kw > 0 && kw <= 50
// - Nếu 50 < kw <= 100
// - Nếu 100 < kw <= 200
// - Nếu  200 <kw <= 350
// - Nếu kw > 350
// in ra kết tính totalElec
// Khối 3: tổng tiền totalElec

const kw50First = 500 ; 
const kw50Second = 650; 
const kw100 = 850;
const kw150 = 1100;
const kwMore = 1300;

function totalElec(){
    var name = document.querySelector("#name").value;
    var kw = document.querySelector("#kw").value;
    var totalElec = 0;
    if (kw > 0 && kw <=50){
        totalElec = kw*kw50First;
    } else if(kw > 50 && kw <=100){
        totalElec = 50*kw50First + (kw-50)*kw50Second;
    } else if(kw > 100 && kw <=200){
        totalElec = 50*kw50First + 50*kw50Second + (kw-100)*kw100;
    } else if(kw > 200 && kw <= 350){
        totalElec = 50*kw50First + 50*kw50Second + 100*kw100 + (kw-200) * kw150;
    } else if (kw > 350){
        totalElec = 50*kw50First + 50*kw50Second + 100*kw100 + 150* kw150 + (kw-350)*kwMore;
    } else{
        totalElec = "Nhập lại số kw!"
    }
    document.querySelector("#totalElec").innerHTML = "Khách hàng:" + name + ". Tiền điện là:" + totalElec;
}
document.querySelector("#btnTotal").onclick = totalElec;


// Tiến thuế thu nhập cá nhân
// Khối 1:
// - Họ và tên: fullName;
// - Tổng thu nhập năm: totalIncome
// - Số người phụ thuộc: depenPeople
// - các mức thuế suất taxRate
// Khối 2:
// Thu nhập chịu thuế (taxable) = totalIncom - 4 - depenPeople * 1.6;
// công thức tính thuế thu nhâp (incomeTax) = taxable * thuế suất (taxRate);
// tính thuế thu nhập dựa trên các mức 0-60, 60-120,120-210,210-384, 384-624,624-960, trên 960;
// in ra thuế thư nhập cá nhân: incomeTax
// Khối 3: Thuê thu nhập cá nhân incomeTax

const taxRate60 = 0.05;
const taxRate120 = 0.1;
const taxRate210 = 0.15;
const taxRate384 = 0.2;
const taxRate624 = 0.25;
const taxRate960 = 0.3;
const taxRateOver960 = 0.35;
function incomeTax(){
    var fullName = document.querySelector("#fullName").value;
    var totalIncome = Number(document.querySelector("#totalIncome").value)/(1e+6);
    var depenPeople = Number(document.querySelector("#depenPeople").value);
    var incomeTax = 0;
    var taxable = totalIncome - 4 - depenPeople * 1.6;
    
    if (taxable > 0 && taxable <= 60){
        incomeTax = taxable * taxRate60;
    } else if(taxable > 60 && taxable <= 120){
        incomeTax = 60*taxRate60 + (taxable-60)*taxRate120;
    } else if(taxable > 120 && taxable <= 210){
        incomeTax = 60*taxRate60 + 60*taxRate120 + (taxable-120)*taxRate210;
    } else if(taxable > 210 && taxable <= 384){
        incomeTax = 60*taxRate60 + 60*taxRate120 + 90*taxRate210 + (taxable-210)*taxRate384;
    } else if(taxable > 384 && taxable <= 624){
        incomeTax = 60*taxRate60 + 60*taxRate120 + 90*taxRate210 + 174*taxRate384 + (taxable-384)*taxRate624;
    } else if(taxable > 624 && taxable <= 960){
        incomeTax = 60*taxRate60 + 60*taxRate120 + 90*taxRate210 + 174*taxRate384 + 240*taxRate624 + (taxable-624)*taxRate960;
    } else if(taxable > 960){
        incomeTax = 60*taxRate60 + 60*taxRate120 + 90*taxRate210 + 174*taxRate384 + 240*taxRate624 + 336*taxRate960 + (taxable-960)*taxRateOver960;
    } else {
        alert("Nhập lại thông tin!");
    }
    document.querySelector("#incomeTax").innerHTML = "Họ và tên: "+ fullName + ". Tổng thuế thu nhập cá nhân: " + Intl.NumberFormat('en-IN').format(incomeTax) + " triệu đồng";
}
document.querySelector("#btnTax").onclick = incomeTax;


// Tính tiền cáp
// Khối 1:
// - Mã khách hàng: codeClient
// - Loại KH (typeClient) là: nhà dân (R) và doanh nghiệp (C)
// - Các loại phí: phí xử lý hóa đơn (feeBill), phí dịch vụ cơ bản(feeServ)
// - số kết nối ở doanh nghiệp (connect)
// - số kênh (channel), phí thuê kênh (feeChannel)
// - tổng hóa đơn: totalBill
// Khối 2:
// - lấy giá trị loại KH (typeCient) do người dùng chọn:
// - Nếu là nhà dân (resid) thì không hiện thị ô số kết nối, tính totalBill = feeBillResid + feeServResid + channelResid * feeChannelResid.
// - Nếu là doanh nghiệp (compa) thì hiện ô số kết nối: 
// + Tính feeServCompa dựa trên số kết nối: nếu connect <=10 thì feeServCompa = 75; nếu connect >10 thì feeServCompa = 75 + (connect -10)*5;
// + totalBill của DN = feeBillCompa + feeServCompa + channelCompa * feeChannelCompa;
// - in ra kết quả totalBill
// Khối 3: totalBill

const feeBillResid = 4.5;
const feeServResid = 20.5;
const feeChannelResid = 7.5;

const feeBillCompa = 15;
const feeServCompa = 75;
const feeChannelCompa = 50;

var type = document.getElementById("typeClient");

// hàm tính tổng tiền cáp
function totalBill(){
    var typeClient = type.value;
    var channel = document.querySelector("#channel").value;
    var connect = document.querySelector("#connect").value;
    var totalBill = 0;
    switch(typeClient){
        case "R":
            totalBill = feeBillResid + feeServResid + channel*feeChannelResid;
            break;
        case "C":
            totalBill = feeBillCompa + feeService(connect) + channel*feeChannelCompa;
            break;
    }
    document.querySelector("#totalBill").innerHTML = "Tổng tiền cáp là: $" + totalBill;
}
document.querySelector("#btnBill").onclick = totalBill;

// hàm tính phí dịch vụ của doanh nghiệp
function feeService(con){
    var feeServ = 0;
    if(con >0 && con <=10){
        feeServ = feeServCompa; 
    } else if (con > 10){
        feeServ = feeServCompa + (con-10)
*5; } else {
    alert("Nhập lại số kết nối!");
}
    return feeServ;
}

// hàm xuất hiện ô số kết nối đối với KH doanh nghiệp
function show(){
    var typeClient = type.value;
    if (typeClient == "R"){
        document.getElementById("showConnect").style.display = "none";
    } else if (typeClient == "C"){
        document.getElementById("showConnect").style.display = "block";
    }
}
type.addEventListener("change", show);
