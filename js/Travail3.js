
function nombr() {
  var nombre = document.getElementById("nmbr").value;
  var etoile = ""
  var i = 0

  while (i < nombre) {
    etoile = etoile + "*"
    i++
  }
  document.getElementById("output").innerHTML =(etoile);
}