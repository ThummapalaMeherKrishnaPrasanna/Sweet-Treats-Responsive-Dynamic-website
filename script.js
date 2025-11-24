

let cost = 0;
let sweetName = '';


const sweetNames = function(){
  document.querySelectorAll('.add').forEach(function(button){
    button.addEventListener('click',function(){

        sweetName = this.closest('.sweet').querySelector('.sweet-name').textContent.trim();
        document.querySelector('.sweet-name-bill').textContent = sweetName;

        // document.querySelector('.quantity1').textContent = 1;

        let price = this.closest('.sweet').querySelector('.price-text').textContent;
        let costValue = price.replace('Rs Piece','').replace('Rs','').trim();;
        cost = Number(costValue)

        
        // document.querySelector('.price').textContent = cost;

         document.querySelector('.addMessage').textContent = '';
    
        document.querySelector('.price').textContent = '';

         document.querySelector('.quantity1').textContent ='';

       
    });   
});
};

sweetNames();

 let finalCost =0;
 let weightValue = 0;

document.querySelectorAll('.quantity').forEach(function(button){
  button.addEventListener('click',function(){
          
        let weightText = this.textContent.trim();

        weightValue = weightText.replace("kg", "").trim();
        
        finalValue = eval(weightValue);

        finalCost = finalValue * cost ;

        // console.log(finalCost);
                  
        document.querySelector('.price').textContent = finalCost;
        // document.querySelector('.finalprice').textContent = finalCost;

        document.querySelector('.quantity1').textContent = weightValue;

        // console.log(weightValue);

  });
});
 

  let sweetNameArray = [];
  let quantityArray = [];
  let priceArray = [];


  const bill = function(){
     document.querySelector('.add-to-cart').addEventListener
  ('click',function(){
     
     sweetNameArray.push(sweetName);
     quantityArray.push(weightValue); 
     priceArray.push(finalCost);
    
    let billSweetName = sweetNameArray.pop();
    let billWeightValue = quantityArray.pop();
    let billfinalcost = priceArray.pop();
 

    localStorage.setItem("billSweetName",billSweetName);
    localStorage.setItem("billWeightValue",billWeightValue);
    localStorage.setItem("billfinalcost",billfinalcost);

     
    console.log(billSweetName);
    console.log(billWeightValue);
    console.log(billfinalcost);


    document.querySelector('.addMessage').textContent = 'Go to cart';

    //  window.location.href= 'billing.html';

  });
  }
  
  bill();