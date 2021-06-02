var screen=document.querySelector("#screen");
var button=document.querySelectorAll("button");
var operator=document.querySelectorAll(".operator");
var number=document.querySelectorAll(".number");
console.log(number);
console.log(operator);

var operand1='';
var operand2='';
var sign='';
var operation='';

for(var i=0;i<button.length;i++)
{
    button[i].addEventListener('click',function()
    {
        
        var value=this.value;
        if(value==='+')
        {
            operand1=parseFloat(screen.innerText);
            sign='+';
            screen.innerText='';
            
        }
        else if(value==='-')
        {
            sign='-';
            operand1=parseFloat(screen.innerText);
            screen.innerText='';
        }
        else if(value==='*')
        {
            sign='*';
            operand1=parseFloat(screen.innerText);
            screen.innerText='';
        }
        else if(value==='/')
        {
            sign='/';
            operand1=parseFloat(screen.innerText);
            screen.innerText='';
            
        }
        else if(value==='=')
        {
            operand2=parseFloat(screen.innerText);
            var result=eval(`${operand1} ${sign} ${operand2}`);
            operation=`${operand1} ${sign} ${operand2}`;
            screen.innerText=`${operation} = ${result}`;
            operand1='';
            operand2='';
            sign='';
            
        }
        else if(value==='abort')
        {
            operand1='';
            operand2='';
            sign='';
            screen.innerText='';
        }
        else if(value==='clear')
        {
            value='';
            screen.innerText='';
        }
        else
        {screen.innerText+=value;}

        
    })
    
}