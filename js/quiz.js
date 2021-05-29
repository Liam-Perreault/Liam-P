function getdata() {
    if(document.getElementById("q1-1").checked) {   
        var q1 = document.getElementById("q1-1").value;  

    } else if(document.getElementById("q1-2").checked) {   
        var q1 = document.getElementById("q1-2").value;  

    } else if(document.getElementById("q1-3").checked) {   
        var q1 = document.getElementById("q1-3").value;  

    } else if(document.getElementById("q1-4").checked) {   
        var q1 = document.getElementById("q1-4").value;  
    } 

    q2 = document.getElementById("q2").value;

    if(document.getElementById("q3-1").checked) {   
        var q3 = document.getElementById("q3-1").value;  

    } else if(document.getElementById("q3-2").checked) {   
        var q3 = document.getElementById("q3-2").value;  

    } else if(document.getElementById("q3-3").checked) {   
        var q3 = document.getElementById("q3-3").value;  
    } 

    if(document.getElementById("q4-1").checked) {   
        var q4 = document.getElementById("q4-1").value;  

    } else if(document.getElementById("q4-2").checked) {   
        var q4 = document.getElementById("q4-2").value;  

    } else if(document.getElementById("q4-3").checked) {   
        var q4 = document.getElementById("q4-3").value;  
    } 

    
    document.getElementById("output").innerHTML =("Question 1 <br> 3 <br><br>\n\
     Question 2 <br> &lt;!DOCTYPE html> <br><br>\n\
     Question 3 <br> Style sheets language <br><br>\n\
     Question 4 <br> Markup language <br><br>\n\
     Question 5 <br> Ligne 6 &lt;/div>"
        
    );

}