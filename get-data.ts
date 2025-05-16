import Data from './data';

interface ReqProps {
	prix?: string;
	hippo?: string;
	date?: string;
};

type ArriveeType = {
	prix: string;
	hippodrome: string;
	date: string;
	arrivee: string;
};

const data: ArriveeType[] = Data;

const getData = ({ prix, hippo, date }: ReqProps): ArriveeType[] => {
	let query: string | undefined;
	let resp: ArriveeType[];

	if (prix) {
		resp = data.filter(arrivee => arrivee.prix.toLowerCase().includes(prix.toLowerCase()));
	} else if (hippo) {
		resp = data.filter(arrivee => arrivee.hippodrome.toLowerCase().includes(hippo.toLowerCase()));
	} else if (date) {
		resp = data.filter(arrivee => arrivee.date.toLowerCase().includes(date.toLowerCase()));
	}

	return resp;
}

export default getData;
