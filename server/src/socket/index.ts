import express from "express";
import { Server } from "socket.io";
import http from "http";
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

export {app, server, io}