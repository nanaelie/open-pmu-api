# open-pmu-api
Une API REST open source pour consulter les arrivées de courses PMU par date, hippodrome ou prix.

Une API REST gratuite et open source pour consulter les **arrivées des courses PMU**, filtrables par **date**, **hippodrome** ou **prix**.

Période des données : du ```22/01/2004``` au ```18/08/2026```  
Dernière mise à jour : ```19/08/2026```

## Fonctionnalités

- Rechercher les arrivées d'une course PMU :
  - par **date**
  - par **nom d'hippodrome**
  - par **nom de prix**

## Utilisation
```http
GET https://open-pmu-api.vercel.app/api/arrivee
```
```
date=DAY/MONTH/YEAR
prix=PRIX
hippo=HIPPODROME
```
### Exemples d'appel

```http
GET https://open-pmu-api.vercel.app/api/arrivees?date=08/18/2026
```

```http
GET https://open-pmu-api.vercel.app/api/arrivees?prix=PRIX DU VIEUX BASSIN
```

```http
GET https://open-pmu-api.vercel.app/api/arrivees?hippo=Deauville
```

Réponse
```JSON
{
    "error": false,
    "message": [
        {
            "type": "Plat",
            "montant": 50900,
            "distance": 2500,
            "prix": "PRIX DU VIEUX BASSIN",
            "lieu": "Deauville",
            "heure_depart": "18:30:00",
            "details": "PLAT, 2500 metres , Corde a DROITE 50.900- HANDICAP DIVISE Pour chevaux entiers, hongres et juments de 4 ans et au-dessus",
            "partants": 15,
            "non_partants": [ 1 ],
            "arrivee": [ 2, 9, 13, 14, 15, 8, 12 ],
            "r/c": "R1/C8",
            "arrivee_details": {
                "2": {
                    "nom_cheval": "MISS OF CHANGE",
                    "sexe": "F",
                    "annee_de_naissance": 2022,
                    "nom_jockey": "LEMAITRE A.",
                    "nom_entraineur": "NIESLANIK M.",
                    "musique": "5p 6p 6p 5p 9p 10p 5p 6p 6p (25) 7p Dp 5p ",
                    "cotes": [ "23.0", "25.0", "31.0" ],
                    "gains": 84773,
                    "corde": 16,
                    "discipline": "Plat",
                    "distance": 2500
                },
                "8": {
                    "nom_cheval": "GOLDEN BLUSH",
                    "sexe": "F",
                    "annee_de_naissance": 2022,
                    "nom_jockey": "PICCONE T.",
                    "nom_entraineur": "ESCUDER C.",
                    "musique": "8p 1p 1p 10p 1p 1p 3p 7p 10p 6p 3p 7p ",
                    "cotes": [ "27.0", "27.0", "33.0" ],
                    "gains": 63084,
                    "corde": 4,
                    "discipline": "Plat",
                    "distance": 2500
                },
                "9": {
                    "nom_cheval": "PRINCESSE D'AMOUR",
                    "sexe": "F",
                    "annee_de_naissance": 2022,
                    "nom_jockey": "LECOEUVRE C.",
                    "nom_entraineur": "DUBOIS J.PH.",
                    "musique": "1p 5p 1p 12p (25) 9p 2p 5p 1p 3p 6p 3p 5p ",
                    "cotes": [ "6.5", "5.5", "4.4" ],
                    "gains": 80930,
                    "corde": 1,
                    "discipline": "Plat",
                    "distance": 2500
                },
                "12": {
                    "nom_cheval": "MISTER GATZ",
                    "sexe": "H",
                    "annee_de_naissance": 2021,
                    "nom_jockey": "GRANDIN MAR.",
                    "nom_entraineur": "NIGGE (S) S.",
                    "musique": "6p 2p 4p 10p (25) 7p 10p 10p 6p 4p 5p (24) 4p 2p ",
                    "cotes": [ "14.0", "10.0", "11.0" ],
                    "gains": 75697,
                    "corde": 3,
                    "discipline": "Plat",
                    "distance": 2500
                },
                "13": {
                    "nom_cheval": "GOLD PLAYER",
                    "sexe": "H",
                    "annee_de_naissance": 2019,
                    "nom_jockey": "BOISSEAU L.",
                    "nom_entraineur": "FORESI F.",
                    "musique": "13p 8p 11p 14p 1p 6p 7p (25) 4p 1p 3p 5p 14p ",
                    "cotes": [ "31.0", "44.0", "58.0" ],
                    "gains": 156320,
                    "corde": 5,
                    "discipline": "Plat",
                    "distance": 2500
                },
                "14": {
                    "nom_cheval": "BRITANIA",
                    "sexe": "F",
                    "annee_de_naissance": 2022,
                    "nom_jockey": "MENDIZABAL I.",
                    "nom_entraineur": "ROHAUT F.",
                    "musique": "8p 11p 5p 5p (25) 3p 2p 1p 2p 1p 3p 2p 2p ",
                    "cotes": [ "18.0", "16.0", "19.0" ],
                    "gains": 66508,
                    "corde": 12,
                    "discipline": "Plat",
                    "distance": 2500
                },
                "15": {
                    "nom_cheval": "JAYCLE DE GREE",
                    "sexe": "H",
                    "annee_de_naissance": 2021,
                    "nom_jockey": "GROSBOIS CHR.",
                    "nom_entraineur": "AUDOUIN B.",
                    "musique": "1p 4p 2p 3p 6p 1p 4p (25) 1p 2p 1p 2p 2p ",
                    "cotes": [ "16.0", "13.0", "8.4" ],
                    "gains": 63521,
                    "corde": 11,
                    "discipline": "Plat",
                    "distance": 2500
                }
            },
            "date": "2026-08-18T00:00:00.000Z"
        }
    ]
}
```
