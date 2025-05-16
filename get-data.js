"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
;
var data = data_1.default;
var getData = function (_a) {
    var prix = _a.prix, hippo = _a.hippo, date = _a.date;
    var query;
    var resp;
    if (prix) {
        resp = data.filter(function (arrivee) { return arrivee.prix.toLowerCase().includes(prix.toLowerCase()); });
    }
    else if (hippo) {
        resp = data.filter(function (arrivee) { return arrivee.hippodrome.toLowerCase().includes(hippo.toLowerCase()); });
    }
    else if (date) {
        resp = data.filter(function (arrivee) { return arrivee.date.toLowerCase().includes(date.toLowerCase()); });
    }
    console.log('Donnée: ', resp);
    return resp;
};
getData({ date: "05/05/2021" });
exports.default = getData;
