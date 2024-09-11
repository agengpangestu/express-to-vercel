"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const utils_1 = __importDefault(require("./utils"));
const app = (0, utils_1.default)();
const port = process.env.PORT;
app.listen(port, () => console.log(`server running at ${port}`));
exports.default = app;
//# sourceMappingURL=index.js.map