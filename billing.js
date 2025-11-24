
let billSweetName = localStorage.getItem("billSweetName")
let billWeightValue = localStorage.getItem("billWeightValue");
let billfinalcost = localStorage.getItem("billfinalcost");


 
 document.querySelector('.billing-sweet').textContent = billSweetName;
 document.querySelector('.billing-quantity').textContent = billWeightValue;
 document.querySelector('.billing-price').textContent = billfinalcost;
 document.querySelector('.totalPrice').textContent =billfinalcost;

 
 localStorage.clear();

 const print = function(){
    document.querySelector('.thank-you').textContent = '🎉 Thank You Visit Again 🎉';
    window.print();

 }