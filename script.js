document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
 function generate () {
    var citations = {
        "Mandela": '"Le courage nest pas labsence de peur, mais la capacité de la vaincre."',
        "Gandhil": '" La vie est un mystère quil faut vivre, et non un problème à résoudre."',
        "Einstein": '"La vie, cest comme une bicyclette, il faut avancer pour ne pas perdre léquilibre."',
        "Coluche": '"Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer."',
        "Confucius": '" Choisissez un travail que vous aimez et vous naurez pas à travailler un seul jour de Lamartine: votre vie.Un seul être vous manque et tout est dépeuplé."',
        "Hugo": '" Une femme quon aime est toute une famille."',
        "Jaurès": '"Il ne faut avoir aucun regret pour le passé, aucun remords pour le présent, et une confiance inébranlable pour lavenir."',
    };
  
    // récupère toutes les clés du dictionnaire (auteurs) et les stocke dans un tableau
    var auteur = Object.keys(citations);
    
    // prend une clé aléatoire (auteur) et la stocke dans l'auteur
    var auteur = auteur[Math.floor(Math.random() * auteur.length)];
    
    // récupère la valeur (quote) qui appartient à cette clé
    var citation = citations[auteur]
  
    document.querySelector("#citation").textContent = citation;
    document.querySelector("#auteur").textContent = auteur;
  
  }