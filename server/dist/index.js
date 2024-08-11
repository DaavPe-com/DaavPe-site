"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const index_1 = require("./socket/index");
// Middlewares
index_1.app.use(express_1.default.json());
index_1.io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});
index_1.app.use(express_1.default.urlencoded());
index_1.app.use((0, cookie_parser_1.default)());
// Routes
const routes_1 = __importDefault(require("./routes/routes"));
index_1.app.get('/', (req, res) => {
    res.send('Hello World');
});
index_1.app.use("/api", routes_1.default);
index_1.server.listen(8080, () => {
    console.log(`Server is running on port ${8080}`);
});
