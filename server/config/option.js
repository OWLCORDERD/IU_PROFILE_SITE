const fs = require("fs");
configPath = __dirname + '/config.json';

let parse = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

exports.ConfigDB = parse;