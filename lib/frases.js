const frases = [
    "Si estás trabajando en algo que te importa de verdad, nadie tiene que empujarte: tu visión te empuja» —Steve Jobs",
    "No tienes que ser grande para empezar. Pero tienes que empezar para poder ser grande» —Zig Ziglar",
    "La felicidad no ocurre por casualidad, sino por elección» —Jim Rohn"
]

const graciosas = [
    "Las mejores cosas de la vida te deshacen el pelo",
    "No soy vago, estoy en modo ahorro de energía",
    "Lo malo no es vivir en las nubes, sino bajar",
    "Odio ser bipolar, es una sensación fantástica",
    "Previsión del tiempo para esta noche: estará oscuro",
    "Las cuatro palabras más bonitas de nuestro idioma: ya te lo dije"
]

const frasesPeliculas = [
    "Descubre quién eres y hazlo a propósito” (Un verano para recordar)",
    "La muerte nos sonríe a todos, devolvámosle la sonrisa” (Gladiador)",
    "Prefiero ser un optimista loco antes que un pesimista sensato” (El genio del amor)",
    "Nací cuando ella me besó, morí el día que me abandonó, y viví el tiempo que me amó” (En un lugar solitario)",
    "Su perfume es una dulce promesa que hace aparecer lágrimas en mis ojos” (Sin city)"

]

export function getFrase(){
    return frases[idAleatorio(frases)]
}

export const getFrasePelicula = () =>{
    return frasesPeliculas[idAleatorio(frasesPeliculas)]
}

export const getFraseGraciosas = ()=>{
    return graciosas[idAleatorio(graciosas)]
}

let idAleatorio = (listaFrases)=>{
    const id = Math.floor(Math.random()*listaFrases.length)
    return id 

}
