var a=0;
var b=0;
var c=0;
var o=" ";

function digitar(num){
    if(num=="."){
        var display=Number(document.getElementById("display").value);
        if(display==Math.floor(display)){
            document.getElementById("display").value += num;
        }
    }
    else{
        document.getElementById("display").value += num; 
    }
}

function operacao(op){
    a = Number(document.getElementById("display").value);
    o = op;
    document.getElementById("display").value = "";
}

function igual(){
    b = Number(document.getElementById("display").value);
    if(o=="+"){
        c = a+b;
    }
    else if(o=="-"){
        c = a-b;
    }
    else if(o=="*"){
        c = a*b;
    }
    else{
        c = a/b;
    }
    document.getElementById("display").value = c;
}

function limpar(){
    document.getElementById("display").value = "";
    o = " ";
    a=b=c=0;
}

function inverter(){
  num = Number(document.getElementById("display").value);
  document.getElementById("display").value = num*-1;
}

function back(){
    var string = String(document.getElementById("display").value);
    document.getElementById("display").value = string.substring(0, string.length-1);
}