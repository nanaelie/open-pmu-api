import getData from '../get-data';

type ArriveeType = {
  prix: string;
  hippodrome: string;
  date: string;
  arrivee: string;
};

module.exports = (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const prix = req.query.prix as string;
    const hippo = req.query.hippo as string;
    const date = req.query.date as string;

    let _resp: [boolean, ArriveeType[] | string];

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
