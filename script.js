
var count = document.querySelector('#count');
var total = document.querySelector('#total')

var x=0;
var price=55;


function addItem(){
    
}











function incrementValue(){
   
      x++;
      
      console.log(x);
      count.innerHTML = x;
      total.innerHTML =(x*price);
}

function decrementValue(){
    x--;
    if(x<0)
    {
        x=0;
    }
    else
    console.log(x);
    count.innerHTML =x;

    total.innerHTML =(x*price);

}