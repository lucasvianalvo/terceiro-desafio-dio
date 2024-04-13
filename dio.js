class Hero{
    constructor(nomeHero, idadeHero, tipoHero){
        this.nomeHero = nomeHero
        this.idadeHero = idadeHero
        this.tipoHero = tipoHero
    }
    
}

let heroi = new Hero ("kratos", 27, "guerreiro")
 console.log(heroi)

let ataque 

if (heroi.tipoHero === "mago") {
    ataque= "usou magia"
    }
  else if (heroi.tipoHero === "guerreiro"){
    ataque= "usou espada"
  }
  else if (heroi.tipoHero === "monge"){
    ataque= "usou artes marciais"
  }
  else if (heroi.tipoHero === "ninja"){
    ataque= "usou shuriken"
  }

  console.log("O " + heroi.tipoHero + " atacou usando " + ataque)
