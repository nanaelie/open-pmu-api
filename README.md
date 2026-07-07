# open-pmu-api
Une API REST open source pour consulter les arrivées de courses PMU par date, hippodrome ou prix.

Une API REST gratuite et open source pour consulter les **arrivées des courses PMU**, filtrables par **date**, **hippodrome** ou **prix**.

Période des données : du ```22/01/2004``` au ```06/07/2026```  
Dernière mise à jour : ```07/07/2026```

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
GET https://open-pmu-api.vercel.app/api/arrivees?date=06/07/2026
```

```http
GET https://open-pmu-api.vercel.app/api/arrivees?prix=PRIX DES SABLES D'OLONNE AGGLOMERATION
```

```http
GET https://open-pmu-api.vercel.app/api/arrivees?hippo=Les Sables D'olonne
```


Réponse
```JSON
{
    "error":false,
    "message":[
        {
            "type":"Attelé",
            "montant":32000,
            "distance":2650,
            "prix":"PRIX DES SABLES D'OLONNE AGGLOMERATION",
            "lieu":"Les Sables D'olonne",
            "heure_depart":"18:30:00",
            "details":"Pour 7 à 10 ans inclus, n'ayant pas gagné 151.000",
            "partants":13,
            "non_partants":0,
            "arrivee":[
                7,
                4,
                2,
                8,
                3,
                13,
                12
            ],
            "r/c":"R1/C8",
            "arrivee_details":{
                "2":{
                    "nom_cheval":"JIM D'ALOUETTE",
                    "sexe":"H",
                    "annee_de_naissance":"2019",
                    "nom_jockey":"RAFFIN E.",
                    "nom_entraineur":"CHAVATTE A.",
                    "poid_du_cheval":2650,
                    "musique":"1a 2a 7a 4a 0a (25) 4a 2a 1a 1a 1a 9a 2a ",
                    "cotes":[
                        "4.3",
                        "3.3",
                        "3.2"
                    ],
                    "gains":"144895",
                    "corde":"",
                    "discipline":"Attelé",
                    "distance":2650
                },
                "3":{
                    "nom_cheval":"VINCI NICE",
                    "sexe":"H",
                    "annee_de_naissance":"2018",
                    "nom_jockey":"NIVARD F.",
                    "nom_entraineur":"UNTERSTEINER J.",
                    "poid_du_cheval":2650,
                    "musique":"0a 8a 4a 2a 7a 7a 1a (25) 6a Da 6a 6a 0a ",
                    "cotes":[
                        "12.0",
                        "13.0",
                        "13.0"
                    ],
                    "gains":"142620",
                    "corde":"",
                    "discipline":"Attelé",
                    "distance":2650
                },
                "4":{
                    "nom_cheval":"RUGER",
                    "sexe":"H",
                    "annee_de_naissance":"2018",
                    "nom_jockey":"PACHA N.",
                    "nom_entraineur":"LINDEGREN E.",
                    "poid_du_cheval":2650,
                    "musique":"Da 0a 9a 0a (25) 2a Da 1a 2a 8a 2a 0a 1a ",
                    "cotes":[
                        "26.0",
                        "28.0",
                        "19.0"
                    ],
                    "gains":"133672",
                    "corde":"",
                    "discipline":"Attelé",
                    "distance":2650
                },
                "7":{
                    "nom_cheval":"JACKPOT MEARAS",
                    "sexe":"H",
                    "annee_de_naissance":"2019",
                    "nom_jockey":"PIETERS DWI.",
                    "nom_entraineur":"TORNQVIST MME M.",
                    "poid_du_cheval":2650,
                    "musique":"8a 1a 1a 1a (25) 0a 1a 1a 6a 2a 1a 1a 2a ",
                    "cotes":[
                        "4.0",
                        "4.2",
                        "3.8"
                    ],
                    "gains":"149542",
                    "corde":"",
                    "discipline":"Attelé",
                    "distance":2650
                },
                "8":{
                    "nom_cheval":"JUST A COUET",
                    "sexe":"H",
                    "annee_de_naissance":"2019",
                    "nom_jockey":"HUBERT A.",
                    "nom_entraineur":"HUBERT A.",
                    "poid_du_cheval":2650,
                    "musique":"8a 5m 5a 3a 7a 0a 0a (25) 5a 8a Da 4a 3a ",
                    "cotes":[
                        "20.0",
                        "29.0",
                        "36.0"
                    ],
                    "gains":"149915",
                    "corde":"",
                    "discipline":"Attelé",
                    "distance":2650
                },
                "12":{
                    "nom_cheval":"DYNAMITE SENSATION",
                    "sexe":"H",
                    "annee_de_naissance":"2018",
                    "nom_jockey":"RAFFIN O.",
                    "nom_entraineur":"RAFFIN O.",
                    "poid_du_cheval":2650,
                    "musique":"7a 8a 0a (25) 6a 7m 6a Da 4a Da 0a 5a 0a ",
                    "cotes":[
                        "28.0",
                        "47.0",
                        "63.0"
                    ],
                    "gains":"106668",
                    "corde":"",
                    "discipline":"Attelé",
                    "distance":2650
                },
                "13":{
                    "nom_cheval":"ORLANDO YOUNG",
                    "sexe":"H",
                    "annee_de_naissance":"2018",
                    "nom_jockey":"BONNE D.",
                    "nom_entraineur":"GUNDERSEN G.V.",
                    "poid_du_cheval":2650,
                    "musique":"3a (25) 3a 7a 5a 2a 5a 1a Da 4a 2a 9a 5a ",
                    "cotes":[
                        "11.0",
                        "15.0",
                        "18.0"
                    ],
                    "gains":"106918",
                    "corde":"",
                    "discipline":"Attelé",
                    "distance":2650
                }
            },
            "date":"06/07/2026"
        }
    ]
}
```
