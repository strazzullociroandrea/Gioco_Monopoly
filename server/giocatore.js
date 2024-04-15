function Giocatore(nickname) {
    this.nickname = nickname;
    this.portafoglio = 1500; // valore portafoglio iniziale
    this.proprieta = [];
    this.posizione = 0; //posizione iniziale
    
    // Metodi get
    this.getNickname = function() {
        return this.nickname;
    }
    
    this.getPortafoglio = function() {
        return this.portafoglio;
    }
    
    this.getProprieta = function() {
        return this.proprieta;
    }
    
    this.getPosizione = function() {
        return this.posizione;
    }
    
    // Metodi set
    this.setNickname = function(nickname) {
         this.nickname = nickname;
    }
    
    this.setPortafoglio = function(newValue) {
        this.portafoglio = newValue;
    }
    
    this.setPosizione = function(newPosizione) {
        this.posizione = parseInt(newPosizione);
    }
}

module.exports = Giocatore;
