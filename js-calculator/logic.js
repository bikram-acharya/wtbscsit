function f(value){
    
    if (value=='clr'){
        document.getElementById("result").value="";
        return;
    }
   
    else if (result==0 && value==0){
        return;
    }

    else if(value=='+' || value=='-' || value=='*' || value=='/'){
        operand = value;
        document.getElementById('result').value=value;
        console.log("from sign:",result)
        
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
        return;
    }

    if (value=='--'){
        
        document.getElementById('result').value*=-1;
        result=parseFloat(document.getElementById('result').value);
        return;
    }

    if(!isNaN(document.getElementById('result').value)){
        
        document.getElementById('result').value+=value;
        result = parseFloat(document.getElementById("result").value);
        console.log("From Number",result)
        return;
    }
    else
        document.getElementById('result').value=value;
        return;
    
        
        
}