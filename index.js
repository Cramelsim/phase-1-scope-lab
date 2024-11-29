// Write your solution in this file

// Declare customerName in the global scope
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'some initial value';


//function to modify customerName
function upperCaseCustomerName(){
    customerName=customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer='not bob';
}


function overwriteBestCustomer(){
  bestCustomer='maybe bob';  
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='new value';
}
