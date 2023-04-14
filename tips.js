var calcula = document.querySelector('#Calcular')
calcula.addEventListener("click", calculateTip)

function calculateTip() {
    var billAmount = parseFloat(document.getElementById("bill-amount").value);
    var tipPercent = parseFloat(document.getElementById("tip-amount").value);
    var numPeople = parseFloat(document.getElementById("num-people").value);
    
    var tipAmount = billAmount * tipPercent;
    var totalAmount = billAmount + tipAmount;
    var totalPerPerson = totalAmount / numPeople;
  

    document.getElementById("tip-amount-display").innerHTML = "Gorjeta: R$" + tipAmount.toFixed(2) + "<br>Total: R$" + totalAmount.toFixed(2) + "<br>Total por pessoa: R$" + totalPerPerson.toFixed(2);
  }
  