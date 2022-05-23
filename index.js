
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
      

      // non functional event handler 
    /*  
    let curentAmaunt = document.getElementById("current_deposit").innerText;
        let currentDepositAmount = parseFloat(curentAmaunt);
        
        let total = depositAmountConvertNumber + currentDepositAmount;
        document.getElementById('current_deposit').innerText = total;
        
      const currentBlance = document.getElementById("current_balnce").innerText;
      let curentBlanceNumber = parseFloat(currentBlance);
      let totalBlanceNumber = total + curentBlanceNumber;
      document.getElementById("current_balnce").innerText = totalBlanceNumber;
      */

      spanValueUpdate("current_deposit",depositAmountConvertNumber);
      spanValueUpdate("current_balnce", depositAmountConvertNumber);
        document.getElementById("deposit_amount").value = "";
  })


  function spanValueUpdate(id , depositAmount){
      let currentAmaount = document.getElementById(id).innerText;
      let curentAmaountNumber = parseFloat(currentAmaount);
      let totalAmount = depositAmount + curentAmaountNumber ;
      document.getElementById(id).innerText = totalAmount;
  }

  // withdreaw evnet part 

  const   withdreawBtn = document.getElementById('withdraw');
  withdreawBtn.addEventListener("click" , function(){
      const withdraw = document.getElementById("withdraw_amount").value;
      let withdrawAmaount = parseFloat(withdraw);
      
      /* const current_withdraw = document.getElementById("current_withdraw").innerText;
        let currentWithdrawAmount = parseFloat(current_withdraw);

        let totalWithdraw = withdrawAmaount + currentWithdrawAmount;
        document.getElementById("current_withdraw").innerText = totalWithdraw;
          
        const currentBlance = document.getElementById("current_balnce").innerText;
        let curentBlanceNumber = parseFloat(currentBlance);

        let totalBlanceNumber =  curentBlanceNumber - totalWithdraw ;
        document.getElementById("current_balnce").innerText = totalBlanceNumber;*/
        
        spanUpdateText("current_withdraw",withdrawAmaount);
        spanUpdateText('current_balnce', -1 * withdrawAmaount );
        
        document.getElementById('withdraw_amount').value = "";
  })


  function spanUpdateText(id , withdrawAmount){
    const currentBlance =  document.getElementById(id).innerText;
    let curentBlanceNumber = parseFloat(currentBlance);
    let totalBlance =curentBlanceNumber   +  withdrawAmount  ;
    document.getElementById(id).innerHTML = totalBlance; 
  }