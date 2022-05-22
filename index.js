
// logine envent handler
let enterLogineBtn = document.getElementById("enter_login_btn");

enterLogineBtn.addEventListener("click",function(){
    let loginArea = document.getElementById("login_area");
    loginArea.style.display= "none";
    const transAcation = document.getElementById("transaction_area");
     transAcation.style.display="block";
})

// deposit event part 
const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener('click',function(){
    let depositAmount = document.getElementById("deposit_amount").value;
    let depositAmountConvertNumber = parseFloat(depositAmount);
     let curentAmaunt = document.getElementById("current_deposit").innerText;
      let currentDepositAmount = parseFloat(curentAmaunt);
       let total = depositAmountConvertNumber + currentDepositAmount;
       document.getElementById('current_deposit').innerText = total;
       document.getElementById("deposit_amount").value = "";
})

