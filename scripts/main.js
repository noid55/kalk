let numberOne = "";
let numberTwo = "";
let operator = "";
let result = "";

function inputTall(input){
 debugger;
  if(isNaN){
    
    if(input == "+" || input == "-" || input == "*" || input == "/"){
      operator = input;
      numberOne = +document.getElementById("result").innerHTML;
      document.getElementById("result").innerHTML = "";
    }
    else if(input == "="){
      numberTwo = +document.getElementById("result").innerHTML;
      document.getElementById("result").innerHTML += input;
      if(operator == "+"){
        result = numberOne + numberTwo;
      }
      else if(operator == "-"){
        result = numberOne - numberTwo;
      }
      else if(operator == "*"){
        result = numberOne * numberTwo;
      }
      else if(operator == "/"){
        result = numberOne / numberTwo;
      }
    }
    /*else if (numberOne && operator){
      numberTwo = +document.getElementById("result").innerHTML;
    }*/
    else if (input == "c"){
      numberOne = "";
      numberTwo = "";
      operator = "";
      document.getElementById("result").innerHTML = "";
    }
    
    
  }
if(!isNaN(input)){
 document.getElementById("result").innerHTML += input;
}
}