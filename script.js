var listado_palabras = ["CAR","YELLOW","BLUE","HTML", "FURTHER", "ADDRESS","ACTUALLY", "REASON", "REMAIN", "ESTABLISH","DESCRIBE","DISCOVER","DIFFICULT","DURING","MEMORY","METHOD","MIND","MOTHER","NECESSARY","RESPONSABILITY","SHOULDER","SOMETIMES","STATEMENT","WINDOWS","CRANEO","HOTWEEL", "BATMAN","MARIO","CRASH"];

var acertadas = 0;
var timer, indice;
var tiempo = 60;

function comenzarJuego(){
    //dejo visible la pantalla del juego y oculto el resto
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    document.getElementById("final").style.display = "none";

    //posicionamos el curso en el input
    document.getElementById("palabra_ingresada").focus();

    //cargamos la palabra
    cargarPalabra();

    //tiempo - cada 1seg llamamos a la funcion restarTiempo
    timer = setInterval('restarTiempo()',1000)

}

//funcion que carga la siguiente palabra del arreglo de forma aleatoria

function cargarPalabra(){
    // genero la posicon de forma aleatoria
    indice = Math.round(Math.random()*(listado_palabras.length-1));
    document.getElementById("palabra").innerHTML = listado_palabras[indice];

    //elimino la posicion ya mostrada
    listado_palabras.splice(indice,1);
}

//funcion que compara la palabra ingresada con la palabra mostrada
function comparar(){
    var palabra_mostrada = document.getElementById("palabra").innerHTML;
    var palabra_tecleada = document.getElementById("palabra_ingresada").value;
//convierto toda la palabra en MAYUSCULA
    palabra_tecleada = palabra_tecleada.toUpperCase();

    if(palabra_mostrada==palabra_tecleada){
        acertadas++
        document.getElementById("palabra_ingresada").value=""
        agregarNodo(palabra_tecleada);
        cargarPalabra(); // CARGO OTRA PALABRA
    }
}
function agregarNodo(palabra){
var span = document.createElement('span')
span.innerHTML = palabra;
document.getElementById("registro").appendChild(span);
}

//funcion que muestra el tiempo
function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo==0){
        // detengo el tiempo
        clearInterval(timer);
        document.getElementById("juego").style.display = "none";
        document.getElementById("final").style.display = "block";
        document.getElementById("cantidad_final").innerHTML = acertadas;
    }
}