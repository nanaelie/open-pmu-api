import getData from '../get-data.js';

export default (req, res) => {
	if (req.method !== 'GET') {
		res.status(405).send('Method Not Allowed');
		return;
	}

	const ua = (req.headers['user-agent'] || '').toLowerCase();

	const blocked = [
		'python-requests',
		'curl',
		'wget',
		'httpx',
		'aiohttp',
		'python-urllib'
	];

	if (blocked.some(agent => ua.includes(agent)) || ua.length < 20) {
		console.log('Automation requests are not allowed.')
		return res.status(403).json({
			error: true,
			message: 'Not allowed'
		});
	}

	try {
		const prix = req.query.prix;
		const hippo = req.query.hippo;
		const date = req.query.date;

		let _resp;
		let param = null;

		if (prix) {
			_resp = getData({ prix });
		} else if (hippo) {
			_resp = getData({ hippo });
		} else if (date) {
			_resp = getData({ date });
		} else {
			_resp = [false, "Aucun paramètre fourni."];
		}

		res.setHeader('Content-Type', 'application/json');
		res.status(200).send({
			error: !_resp[0],
			message: _resp[1],
		});

	} catch (error) {
		console.error(error);
		res.status(500).send("Erreur serveur.");
	}
};

