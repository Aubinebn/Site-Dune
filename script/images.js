let cpt2 = 0;
// Previous

$('#skipButton2>img:first-of-type').click(function () {
   let cptAfter2 = cpt2 - 1;
   if (cptAfter2 == -1) {
      cptAfter2 = $('.images>img').length-1;
   }
   console.log(cptAfter2);

   // Changement d'image
   $('.images>img').eq(cpt2).fadeOut(1000).end().eq(cptAfter2).fadeIn(1000);

   //Actualisation du button
   $('#skipCircle>span').eq(cpt2).removeClass('active').end().eq(cptAfter2).addClass('active');

   // mise a jour du compteur
   cpt2 = cptAfter2
   // console.log(cpt2);
});

// Next

$('#skipButton2>img:last-of-type').click(function () {
   let cptAfter2 = cpt2 + 1;
   if (cptAfter2 == $('.images>img').length) {
      cptAfter2 = 0;
   }
   console.log(cptAfter2);

   // Changement d'image
   $('.images>img').eq(cpt2).fadeOut(1000).end().eq(cptAfter2).fadeIn(1000);

   //Actualisation du button
   $('#skipCircle>span').eq(cpt2).removeClass('active').end().eq(cptAfter2).addClass('active');

   // mise a jour du compteur
   cpt2 = cptAfter2
});
