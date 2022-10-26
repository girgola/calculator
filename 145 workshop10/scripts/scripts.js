// let a="6", b="1";
// let c=parseInt(a), d=parseInt(b);
// console.log(c+d);


function calculat2(){

    let num1=parseInt(document.getElementById("number1").value)
    let num2=parseInt(document.getElementById("number2").value)
    let a=document.getElementById("op").value;
    let form;

    switch(a){
        case "+":
        form=num1+num2;
        document.getElementById("answer").innerHTML=num1 + "+"+ num2 +"="+ form;
        break;
        case "-":
            form=num1-num2;
            document.getElementById("answer").innerHTML=num1 + "-"+ num2 +"="+ form;
        break;
        case ":":
            form=num1/num2;
            document.getElementById("answer").innerHTML=num1 + ":"+ num2 +"="+ form;
        break;
        case "/":
            form=num1/num2;
            document.getElementById("answer").innerHTML=num1 + "/"+ num2 +"="+ form;
        break
        case "*":
            form=num1*num2;
            document.getElementById("answer").innerHTML=num1 + "*"+ num2 +"="+ form;
        break;
        case "X":
            form=num1*num2;
            document.getElementById("answer").innerHTML=num1 + "X"+ num2 +"="+ form;
        break;
        default: console.log("tkven ar chagiweriat operatori");


    }
}

