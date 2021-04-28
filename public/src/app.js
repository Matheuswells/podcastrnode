"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var path = require("path");
var app = express();
var rawdata = String(fs.readFileSync(path.resolve(__dirname, 'server.json')));
var data = JSON.parse(rawdata);
app.get('/', function (req, res) {
    res.json(data);
});
exports.default = app;
//# sourceMappingURL=app.js.map