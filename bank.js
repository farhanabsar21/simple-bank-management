// submit event handler

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click",function(){
    document.body.style.backgroundColor = "#ffe6e6";
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

// deposit button event handler

const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click",function(){
    const depositNumber = getNumberInput("depositAmount");

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    
    document.getElementById("depositAmount").value = "";
});


// adding common function deposit and balance

function updateSpanText(id,inputNumber){
    const current = document.getElementById(id).innerText; // it retrns a string
    const currentNumber = parseFloat(current); // it returns number of that string
    const total = inputNumber + currentNumber;
    document.getElementById(id).innerText = total;
}

function getNumberInput(id){
    const amount = document.getElementById(id).value.trim();
    const number = parseFloat(amount);
    return number;
}

// withdraw button event handler

const withdrawBtn = document.getElementById("withdraw");

withdrawBtn.addEventListener("click",function(){
    const withdrawNumber = getNumberInput("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber); // - dileo kaaj kore
    document.getElementById("withdrawAmount").value = "";
});