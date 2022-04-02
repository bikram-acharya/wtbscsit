let plus_minus =false
function logic(value){
    
    if (value=='clr'){
        document.getElementById("result").value="";
        result = 0;
        console.log("From Clr", result)
        return;
    }
   
    else if (result==0 && value==0){
        console.log("From Zero", result)
        return;
    }

    else if(value=='+' || value=='-' || value=='*' || value=='/'){
        operand = value;
        document.getElementById('result').value=value;
        console.log("From Symbol", result)
        plus_minus =false

        return;
    }
    if (value=="="){
        right_num =parseFloat(document.getElementById('result').value)
        left_num=parseFloat(result);
        console.log("From Equal",left_num,right_num)
        switch(operand){
            case '+': total=left_num+right_num; break;
            case '-': total=left_num-right_num; break;
            case '*': total=left_num*right_num; break;
            case '/': total=parseInt(left_num/right_num); break;
        }
        document.getElementById('result').value = total;
        result=parseFloat(document.getElementById('result').value);
        plus_minus =false
        return;
    }

    if (value=='--'){
        
        document.getElementById('result').value*=-1;
        result=parseFloat(document.getElementById('result').value);
        plus_minus = true
        console.log("From Zero", result)
        return;
    }

    if(!isNaN(document.getElementById('result').value)){
        document.getElementById('result').value+=value;
        if(plus_minus){
        result=parseFloat(document.getElementById("result").value)
        console.log("From inside Num", result,plus_minus)
        return;
        }
        result=parseFloat(document.getElementById("result").value)
        console.log("From Num", result,plus_minus)
        return;
    }
    else
        document.getElementById('result').value=value;

        console.log("From Non Num", result,plus_minus)
        return;
    
        
        
}