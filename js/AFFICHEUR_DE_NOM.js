var prenom = document.getElementById("pname").value;
var nomMilieu = document.getElementById("mname").value;
var nomFamille = document.getElementById("fname").value;

function ini() {
    var prenom = document.getElementById("pname").value;
    var nomMilieu = document.getElementById("mname").value;
    var nomFamille = document.getElementById("fname").value;
    var initiales = (prenom.charAt(0)+"."+nomMilieu.charAt(0)+"."+nomFamille.charAt(0)+".")
    document.getElementById("output").innerHTML =(initiales.toUpperCase());
}
function nomc() {
    var prenom = document.getElementById("pname").value;
    var nomMilieu = document.getElementById("mname").value;
    var nomFamille = document.getElementById("fname").value;
    var nomComplet =((prenom.charAt(0)).toUpperCase()+prenom.slice(1) +" "+ (nomMilieu.charAt(0)).toUpperCase()+nomMilieu.slice(1)+" "+ (nomFamille.charAt(0)).toUpperCase()+nomFamille.slice(1)); 
    document.getElementById("output").innerHTML =(nomComplet);
}
function util() {
    var prenom = document.getElementById("pname").value;
    var nomMilieu = document.getElementById("mname").value;
    var nomFamille = document.getElementById("fname").value;
    var nomUtilisateur = (prenom.charAt(0)+nomMilieu.charAt(0)+nomFamille);
    document.getElementById("output").innerHTML =(nomUtilisateur.toLowerCase());
}