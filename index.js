const fs = require("fs");
const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const conf = JSON.parse(fs.readFileSync("./conf.json"));
const Giocatore = require("./server/giocatore.js");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use("/", express.static(path.join(__dirname, "public")));
const server = http.createServer(app);

const io = new Server(server);
io.on("connection", (socket) => {
    let giocatoreTemp = undefined;
    socket.on("login", (nickname) => {
        giocatoreTemp = new Giocatore(nickname);
        io.emit("login", "Un nuovo utente partecipa al gioco");
    })
    socket.on("cambiaPosizione", (posizioneNuova) => {
        console.log(giocatoreTemp);
        giocatoreTemp.posizione = parseInt(posizioneNuova);
        io.emit("posizione", giocatoreTemp.getPosizione());
    })
});

server.listen(conf.port, () => {
    console.log("server running on port: " + conf.port);
});