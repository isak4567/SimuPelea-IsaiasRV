// ########## Contructores
class Personaje {
    constructor(nombre, lvl, clase, estadisticas, daño) {
        this.nombre = nombre;
        this.clase = clase;
        this.lvl = lvl;
        this.estadisticas = estadisticas;
        this.daño = daño;
    }
    ataque() {
        switch (this.clase) {
            case "Macho":
                document.write(`<p class="ataque">Daño: ${this.daño}. Tu golpe Masculino destroza el enemigo. </p>`);
                return 0;
            case "Vago":
                document.write(`<p class="ataque">Daño: ${this.daño}. Tu golpe Cansado cansa al oponente. </p>`);
                return 0;
            case "Pastor":
                document.write(`<p class="ataque">Daño: ${this.daño}. Tu Fe en Cristo Rey hiere al no creyente. </p>`);
                return 0;
            case " ":
                document.write(`<p class="ataque">Daño: ${this.daño}. Igual que Ignoraste elegir clase, Ignoras a tu oponente. El daño sentimental es devastador!! </p>`);
                return 0;

            default:
                document.write(`<p class="ataque">Daño: ${this.daño}. Algo salio mal, Abrazaste al enemigo:</p>`);
                return 0;
        }
    }
}

class Monstruo {
    constructor(nombre, hp, huida) {
        this.monstruo = nombre;
        this.hp = hp;
        this.huida = huida;
    }
}

// ########## Funciones
function creadorPersonaje() {
    let nombre = prompt("Nombre del personaje");
    let clase = prompt("Elija clase: \n\n 'M' - 'V' - 'P'"); // Macho - Vago - Pastor
    let lvl = parseInt(prompt("Elija el lvl de 1 a 10"));
    let estadisticas = parseInt(prompt("Elija las estadisticas 1 a 10"));
    let daño = 0;

    switch (clase) {
        case "M":
            clase = "Macho";
            daño = (3 + estadisticas) * lvl;
            break;

        case "V":
            clase = "Vago";
            daño = (101 - estadisticas) / (lvl);
            break;

        case "P":
            clase = "Pastor";
            daño = estadisticas * lvl;
            break;

        case " ":
            daño = Math.pow((1 * estadisticas), lvl);
            break;

        default:
            clase = "Abrazador";
            break;
    }

    return new Personaje(nombre, lvl, clase, estadisticas,daño);

}

function escribidor(objeto) {
    let acumulador = ``;
    for (const key in objeto) {
        acumulador += `<p class="infoPj"><span>${key.toUpperCase()}:</span> ${objeto[key]}</p>`;
    }
    return acumulador;
}

function enfrentamiento() {
    let acumulador = escribidor(tuPersonaje);
    let enemigo = parseInt(prompt("Elige tu enemigo con un numero del 0 a 2"));
    let acumuladorEnemy = escribidor(monstruos[enemigo]);

    while (monstruos[enemigo].hp > 0) {
        tuPersonaje.ataque();
        monstruos[enemigo].hp -= tuPersonaje.daño;
        monstruos[enemigo].huida--;

        if (monstruos[enemigo].huida === 0) {
            document.write("###### Fallaste ######");
            break;
        }
        
    }

    if (monstruos[enemigo].huida > 0) {
        document.write("###### Ganaste ######");
    }

    return `<div class="pelea">
                <div class="personaje"> ${acumulador} </div>
                <p class="VS">VS</p>
                <div class="monstruo"> ${acumuladorEnemy} </div>
            </div>
            `;
}

// ########## Programa en accion
alert("Bienvenido al enfrentamiento de Bestias.\nCrea tu personaje y pelea contra 1 entre 3 Bestias.")

const tuPersonaje = creadorPersonaje();

let monstruos = [new Monstruo("Virgs",260,11),new Monstruo("Power",600,7),new Monstruo("Eternal",9999,2)]

document.write(enfrentamiento());
