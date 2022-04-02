let cpt = 0;

// Previous

$('#skipButton>img:first-of-type').click(function () {
   let cptAfter = cpt - 1;
   if (cptAfter == -1) {
      cptAfter = $('.charactersPictures>img').length-1;
   }
   // console.log(cptAfter);

   // Changement d'image
   $('.charactersPictures>img').eq(cpt).fadeOut(1000).end().eq(cptAfter).fadeIn(1000);

   // Changement de texte

   $('.charactersNames>p').eq(cpt).fadeOut(1000).end().eq(cptAfter).fadeIn(1000);

   // mise a jour du compteur
   cpt = cptAfter
   // console.log(cpt);
});

// Next

$('#skipButton>img:last-of-type').click(function () {
   let cptAfter = cpt + 1;
   if (cptAfter == $('.charactersPictures>img').length) {
      cptAfter = 0;
   }
   // console.log(cptAfter);

   // Changement d'image
   $('.charactersPictures>img').eq(cpt).fadeOut(1000).end().eq(cptAfter).fadeIn(1000);

   // Changement de texte

   $('.charactersNames>p').eq(cpt).fadeOut(1000).end().eq(cptAfter).fadeIn(1000);

   // mise a jour du compteur
   cpt = cptAfter
});

