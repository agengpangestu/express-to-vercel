"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
app.get("/", (_req, res) => {
    res.send("WORK!");
});
app.get("/ping", (_req, res) => {
    res.send("Pong 🏓!");
});
app.listen(port, () => console.log(`server running at ${port}`));
exports.default = app;
//# sourceMappingURL=index.js.map