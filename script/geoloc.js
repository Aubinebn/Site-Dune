////////////////////////////////////////////////////////////////////////////////////////////
//Button


// Appelée si récupération des coordonnées réussie
function positionSucces(position) {

  // Centre la carte sur la position
  map.flyTo([position.coords.latitude, position.coords.longitude], 15);

  //Marqueur aux coordonnées utilisateur
  var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map).bindPopup("<b>Vous etes ici</b>");

  //Ajoute les cinémas à la carte
  L.geoJSON(cinema, {
    style: function (feature) {
        return {color: feature.properties.color};
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.NOM_ETABLISSEMENT;
}).addTo(map);
}

// Appelée si échec de récuparation des coordonnées
function positionErreur(erreurPosition) {
  // Cas d'usage du switch !
  let natureErreur;
  switch (erreurPosition.code) {
    case erreurPosition.TIMEOUT:
      // Attention, durée par défaut de récupération des coordonnées infini
      natureErreur = "La géolocalisation prends trop de temps...";
      break;
    case erreurPosition.PERMISSION_DENIED:
      natureErreur = "Vous n'avez pas autorisé la géolocalisation.";
      break;
    case erreurPosition.POSITION_UNAVAILABLE:
      natureErreur = "Votre position n'a pu être déterminée.";
      break;
    default:
      natureErreur = "Une erreur inattendue s'est produite.";
  }
  //Affiche alert box navigateur
  alert(natureErreur);
}

// Récupération des coordonnées au clic sur le bouton
$('button#geoButton').click(function () {
  // Support de la géolocalisation
  if ("geolocation" in navigator) {
    // Support = exécution du callback selon le résultat
    navigator.geolocation.getCurrentPosition(positionSucces, positionErreur, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 30000
    });
  } else {
    // Non support = injection de texte
    alert("La géolocalisation n'est pas supportée par votre navigateur");
  }
});


////////////////////////////////////////////////////////////////////////////////////////////
//Map

// Création de la carte, vide à ce stade
let map = L.map('map', {
  center: [47.2608333, 2.4188888888888886], // Centre de la France
  zoom: 5,
  minZoom: 4,
  maxZoom: 19,
});

// Ajout des tuiles (ici OpenStreetMap)
// https://wiki.openstreetmap.org/wiki/Tiles#Servers
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);

// Ajout de l'échelle
L.control.scale().addTo(map);
