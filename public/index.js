const socket = io();

const nickname = document.getElementById("nickname");;
const invia = document.getElementById("invia");;

invia.onclick = () => {
    socket.emit("login", nickname.value);

    //invio al server tramite socket la nuova posizione

    //cambio la posizione e poi la visualizzo
    socket.emit('cambiaPosizione', 10);

    //vedo la nuova posizione
    socket.on("posizione", (posizione) => {
        console.log(posizione);
    });
}

/*
socket.on("cambiaPosizione",10);
*/