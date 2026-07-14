import json
from dottify import Dottify

item_keys = {
	"type": None,
	"montant": 0,
	"distance": 0,
	"prix": None,
	"lieu": None,
	"heure_depart": None,
	"details": None,
	"partants": 13,
	"non_partants": 0,
	"arrivee": [],
	"r/c": None,
	"arrivee_details": {
		"7": {
			"nom_cheval": None,
			"sexe": None,
			"annee_de_naissance": 0,
			"nom_jockey": None,
			"nom_entraineur": None,
			"poid_du_cheval": 0,
			"musique": None,
			"cotes": [],
			"gains": 0,
			"corde": "",
			"discipline": None,
			"distance": 2650
		},
	},
	"date": None
}

with open("racing-horse-data.json", "r") as f:
	races: list = json.load(f)
	
	for year in list(range(2004, 227)):
		result = list(filter(lambda race: race['date'].endswith(str(year)), races))
		filename = f"./races-results/{str(year)[2:]}-races-results.json"
		with open(filename, "w") as g:
			json.dump(result, g, ensure_ascii=False, indent=4)



