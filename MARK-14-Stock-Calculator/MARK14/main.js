var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");
var outputGraphic = document.querySelector("#output-graphic");


window.addEventListener("load",()=>{
    showOutput(`The secret to investing is to figure out the value of something and then pay a lot less.`);
   
});

submitBtn.addEventListener("click",submitHandler);

function submitHandler()
{
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    if(ip <= "0" || qty <= "0" || curr <= "0" )
    {
        showOutput(`Please enter valid Inputs`);
       
    }
    else{
        calculateProfitAndLoss(ip, qty, curr);
    }
    
}


function calculateProfitAndLoss(initial, quantity, current){

    if(initial>current)
    {
        //loss
        var loss = ( initial - current ) *quantity;
        var lossPercentage = (loss/(initial*quantity)) * 100;
        showOutput(`Loss is ${loss.toFixed(2)} and loss percentage is ${lossPercentage.toFixed(2)} %`) ;
       

    }
    else if(current > initial)
    {
        //profit
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/(initial*quantity)) * 100;
        showOutput(`Profit is ${profit.toFixed(2)} and profit percentage is ${profitPercentage.toFixed(2)} %`) ;
      

    }
    else
    {
      
      showOutput(`Oops! only Gained Experience`);

    }

}

function showOutput(message)
{
    outputBox.style.display = "inline-block";
    outputBox.innerText = message;
}

