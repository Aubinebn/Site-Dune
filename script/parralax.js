$.fn.parallaxe = function(vitesse) {
    // Récupérer l'élément
    const element = $(this);

    // Hauteur du viewport
    const hViewport = $(window).height();

    // Hauteur de l'élément
    const hElt = element.height();

    function actualiser () {
        // Récupérer la position du viewport
        const posY = $(window).scrollTop();

        // Position au sein du body
        const y = element.offset().top;

        // On agit sur la position du background si on voit l'élément
        if (y > posY + hViewport || posY > y + hElt) {
            // En dehors du viewport
        } else {
            element.css({
                backgroundPositionY: `${Math.round((y - posY) * vitesse)}px`,
            })
        }
    }

    // Initialisation
    actualiser();

    // Ecoute du scroll
    $("#scrollbgcontainer").scroll(actualiser);
}

// ///////////////////////////////////////////////
// Execution du parallaxe

$('#slide1').parallaxe(.5);

$('#slide2').parallaxe(.5);

$('#slide3').parallaxe(.5);

$('#slide4').parallaxe(.5);

$('#slide5').parallaxe(.5);