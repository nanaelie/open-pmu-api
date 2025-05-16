import getData from '../get-data';

module.exports = async (req, res) => {
	if (req.method !== 'GET') {
		res.status(405).send('Method Not Allowed');
		return;
	}

	try {
		let prix = req.query.prix;
		let hippo = req.query.prix;
		let date = req.query.date;
		let resp: string | undefined;

		if (prix !== "") {
			const resp = getData({ prix: prix });    
		}else if (hippo !== "") {
			const resp = getData({ hippo:hippo });    
		}else if (date !== "") {
			const resp = getData({ date:date });    
		}else {
			const resp = {
				"error": true, 
				"message": "Aucun paramètre fourni."
			};
		}

		res.setHeader('Content-Type', 'application/json');
		res.send(resp);

	} catch (error) {
		res.status(500).send("Erreur serveur.");
	}
};

