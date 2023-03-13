let cost = localStorage.getItem('cost');
let name = localStorage.getItem('name');
let dis_name = name.substr(0,26) + "...";
if(cost){
  let costContainer = document.querySelector('.sub-total');
  let quantity = localStorage.getItem('quantity');
  costContainer.innerHTML += `
  <div class="sub">
    <span class = "heading">SUB - TOTAL</span>
    <span class = "payment-name">${dis_name}</span>
    <span class = "total-item">(Qty : ${quantity}) </span>
    <span class = "total-cost">&#8377; ${cost}.00</span>
    <span class="payment"><a href="payment.html">Proceed to Pay</a></span>
  </div>
  `
}else{
  let costContainer = document.querySelector('.sub-total');
  let numbers = localStorage.getItem('cartnumbers');
  let cartCost = localStorage.getItem('totalCost');
  costContainer.innerHTML += `
  <div class="sub">
    <span class = "heading">SUB - TOTAL</span>
    <span class = "total-item">(${numbers} items) :</span>
    <span class = "total-cost">&#8377; ${cartCost}.00</span>
    <span class="payment"><a href="payment.html">Proceed to Pay</a></span>
  </div>
  `
}
