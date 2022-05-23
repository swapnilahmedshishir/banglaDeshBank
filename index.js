
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
      
    const currentBlance = document.getElementById("current_balnce").innerText;
     let curentBlanceNumber = parseFloat(currentBlance);
     let totalBlanceNumber = total + curentBlanceNumber;
     document.getElementById("current_balnce").innerText = totalBlanceNumber;

       document.getElementById("deposit_amount").value = "";
})


 function spanValueUpdate(id){
    let currentAmaunt = document.getElementById('id').innerText;
    let curentAmauntNumber = parseFloat(currentAmaunt);
    let totalAmount = curentAmauntNumber 

 }






// withdreaw evnet part 

const   withdreawBtn = document.getElementById('withdraw');
withdreawBtn.addEventListener("click" , function(){
    const withdraw = document.getElementById("withdraw_amount").value;
     let withdraw_amount = parseFloat(withdraw);
    
     const current_withdraw = document.getElementById("current_withdraw").innerText;
      let currentWithdrawAmount = parseFloat(current_withdraw);

      let totalWithdraw = withdraw_amount + currentWithdrawAmount;
       document.getElementById("current_withdraw").innerText = totalWithdraw;
        
       const currentBlance = document.getElementById("current_balnce").innerText;
       let curentBlanceNumber = parseFloat(currentBlance);

       let totalBlanceNumber =  curentBlanceNumber - totalWithdraw ;
       document.getElementById("current_balnce").innerText = totalBlanceNumber;
       
       
       document.getElementById('withdraw_amount').value = "";
})
