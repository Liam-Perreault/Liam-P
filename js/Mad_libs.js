function getdata() {
    var final = "J’adore l’été ! Chaque jour, quand je suis en\n\
     vacances, je me réveille, je mets mes " + document.getElementById("m1").value + " \n\
     (vêtements - nom pluriel), je me rend à la cuisine et je mange \n\
     " + document.getElementById("m2").value + " (nourriture, avec déterminant)\n\
      pour déjeuner. Ensuite, mon activité préféré est de \n\
     " + document.getElementById("m3").value + " (action - verbe à l’infinitif) avec mon ami \n\
     " + document.getElementById("m4").value + " (nom d’ami). À 14h, je dîne. Je mange des \n\
     " + document.getElementById("m5").value + " (nourriture - au pluriel) \n\
     " + document.getElementById("m6").value + " (adjectif). Durant l’après-midi, j’aime me rendre au parc et de \n\
     " + document.getElementById("m7").value + " (action - verbe à l’infinitif) \n\
     " + document.getElementById("m8").value + " (adverbe qui termine en -ment). En soirée, je mange toujours du \n\
     " + document.getElementById("m9").value + " (nourriture) pour le souper. Finalement, je me couche et je rêve de \n\
     " + document.getElementById("m10").value + " (nom). Quel été \n\
     " + document.getElementById("m11").value + " (adjectif) !"
     

     document.getElementById("output").innerHTML = final;
}