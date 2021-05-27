
//forme 1 


function f1() {
  var final = ""
  for (let i=0; i < 10; i++ ) {
    var asterisques = ""
    

      for (let j = 0; j <= i; j++) {
        asterisques = asterisques + "*"
    }
    final =  final +"<br>" + (asterisques);
    document.getElementById("output").innerHTML =(final);
  }
}

function f2() {
  var final = ""
  for (let i=0; i < 10; i++ ) {
    var asterisques = ""
    

      for (let j = 1; j <= 10 - i; j++) {
        asterisques = asterisques + "*"
    }
    final =  final +"<br>" + (asterisques);
    document.getElementById("output").innerHTML = final;
  }
}


//forme 3
function f3() {
  var final = ""
  for (let i=0; i < 10; i++ ) {
    var asterisques = ""
    var espaces = ""

    for (let j = 0; j <= i-1; j++) {
      espaces = espaces + " ";
    }
      for (let j = 1; j <= 10-i; j++) {
        asterisques = asterisques + "*"
    }
    
    final =  final +"<br>" + (espaces+asterisques);
    document.getElementById("output").innerHTML =(final);
  }
}

function f4() {
  var final = ""
  for (let i=1; i <= 10; i++ ) {
    var asterisques = ""
    var espaces = ""

    for (let j = 1; j <= 10-i; j++) {
      espaces = espaces + " ";
    }
      for (let j = 1; j <= i; j++) {
        asterisques = asterisques + "*"
    }
    final =  final +"<br>" + (espaces+asterisques);
    document.getElementById("output").innerHTML =(final);
  }
}