function dec2boh()
{
   var a = "";
    var x = document.getElementById("decimal").value; 
    while(x > 0) {
     a = x%2 + a;
     x = Math.floor(x/2);
     document.getElementById("bin").innerHTML = "Binaire :" + a;   
    }    
    
    var b = "";    
    var y = document.getElementById("decimal").value;
    while(y > 0) {
     b = y%8 + b;
     y = Math.floor(y/8);
     document.getElementById("oct").innerHTML = "Octal :" + b;   
                 }
         
                 var c ="";
                        var z = document.getElementById("decimal").value;
                        while(z > 0){
									if(z%16==10){
									  c = "A";
									}
									else if(z%16==11){
									  c = "B";
									}
									else if(z%16==12){
									  c = "C";
									}
									else if(z%16==13){
									  c = "D";
									}
									else if(z%16==14){
									  c = "E";
									}
									else if(z%16==15){
									  c = "F";
									}
                                    else{ 
                                    c = z%16+ c;}
									z = Math.floor(z/16);
                                    document.getElementById("hex").innerHTML = "Hexadecimal :" + c; 
                                    }
}