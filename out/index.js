"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./src/app");
require('dotenv').config();
app_1.default.listen(process.env.PORT, function () {
    console.log("Server running on http://localhost:" + process.env.PORT);
});
//# sourceMappingURL=index.js.map