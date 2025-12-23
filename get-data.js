/*"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const racing_horse_data_1 = __importDefault(require("./racing-horse-data"));
const data = racing_horse_data_1.default;
const getData = ({ prix, hippo, date }) => {
    let resp = [];
    if (prix) {
        resp = data.filter(arrivee => arrivee.prix.toLowerCase().includes(prix.toLowerCase()));
    }
    else if (hippo) {
        resp = data.filter(arrivee => arrivee.lieu.toLowerCase().includes(hippo.toLowerCase()));
    }
    else if (date) {
        resp = data.filter(arrivee => arrivee.date.toLowerCase().includes(date.toLowerCase()));
    }
    if (resp.length > 0) {
        return [true, resp];
    }
    return [false, "Pas de correspondance"];
};
exports.default = getData;

*/

import Data from './racing-horse-data';

const data = Data;

const getData = ({ prix, hippo, date }) => {
  let resp = [];

  if (prix) {
    resp = data.filter(arrivee =>
      arrivee.prix.toLowerCase().includes(prix.toLowerCase())
    );
  } else if (hippo) {
    resp = data.filter(arrivee =>
      arrivee.lieu.toLowerCase().includes(hippo.toLowerCase())
    );
  } else if (date) {
    resp = data.filter(arrivee =>
      arrivee.date.toLowerCase().includes(date.toLowerCase())
    );
  }

  if (resp.length > 0) {
    return [true, resp];
  }

  return [false, "Pas de correspondance"];
};

export default getData;
