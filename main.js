const edad = 18;

if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// si queremos reutilizar el código usamos 'funciones'

function calcularMayoriaDeEdad(edad) {
    if (edad >= 18) {
        console.log('Eres mayor de edad');
    } else {
        console.log('Eres menor de edad');
    }
}

calcularMayoriaDeEdad(16);
calcularMayoriaDeEdad(21);

//   Uso de la palabra reservada 'retunrn'

//  function suma (valor1, valor2) {
//     console.log(valor1 + valor2);
//  }

//  suma(1,4);

 function suma(valor1, valor2) {
    return valor1 + valor2;
 }

 const resultado = suma(1, 1);

 console.log(resultado);

//  --------------------

 function saludar(nombre) {
    console.log('Hola ' + nombre)
  }
  
  saludar('Pepe') // Hola Pepe

  /**
   * FUNCIONES FLECHA
   */

  console.clear();

  function saludar() {
    return 'Hola!';
  }

//   saludarArrow = () => {
//     return 'Hola!';
//   } 
  
  //ES IGUAL A

saludarArrow = () => 'Hola Mundo!'

  console.log('Función', saludar());
  console.log('Función flecha', saludarArrow());

  function doble(numero) {
    return numero * 2;
  }

  dobleArrow = numero => numero * 2;

  console.log('Funcion por dos', doble(4));
  console.log('Funcion flecha por dos', dobleArrow(4));

  restaArrow = (numero1, numero2) => numero1 - numero2;

  console.log('Funcion resta flecha', restaArrow(10, 5));
  
  
/**
 * EJERCICIOS 
 */

 //Crea una función que reciba un número y devuelva el doble de ese número.



  function dobleDelNumero(numero) {
    return numero * 2;
  }

  resultadoDoble = dobleDelNumero(4);
  resultadoDoble = dobleDelNumero(5);
  resultadoDoble = dobleDelNumero(9);

console.log(resultadoDoble);

//   Crea una función que reciba un número y devuelva el cuadrado de ese número.


function cuadradoDelNumero(numero2) {
    return numero2 ** 2;
  }

const numeroAlCuadrado = cuadradoDelNumero(5);

console.log(numeroAlCuadrado);

//  Crea una función que calcule el área de un rectángulo y la muestre por consola.

function areaDelRectangulo(base, altura) {
    return base * altura;
}

let area = areaDelRectangulo(12, 4);

console.log('El area del rectángulo es', area);

//  Crea una función que reciba un número y muestre por consola si es par o impar.


function detectarNumeroPar(numero) {
    if (numero % 2 == 0); {
        console.log('Es Par');
    } 
}

detectarNumeroPar(248);

function esPar(numero) {
    return (numero % 2) == 0;
}
const numeroPar = esPar(346);
console.log('Es numero par:', numeroPar);

// Dado el siguiente array de personas:


const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];
  
  //  Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
 
  function mayoresDeEdad(array){
    let mayores = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].edad >= 18){
            mayores.push(array[i])
        }
    }
    return mayores;
}

console.log(mayoresDeEdad(personas));

mayoresDeEdad(personas);

// Dime cual es la persona más joven del array.

function masJoven(personas) {
  let masJoven = personas[0];
  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad < masJoven.edad) {
      masJoven = personas[i];
    }
  }
  return masJoven;
}

console.log(masJoven(personas));

/**
 *  Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.
 */

 const pokemons = [
  {
    nombre: 'Squirtle',
    tipo: 'agua',
  },
  {
    nombre: 'Bulbasaur',
    tipo: 'planta',
  },
  {
    nombre: 'Charmander',
    tipo: 'fuego',
  },
];

function mostrarPokemons(pokemons) {
  for (const pokemon of pokemons) {
    console.log(pokemon.nombre);
  }
}

mostrarPokemons(pokemons);


// Otra del mismo estilo

const alumnos = [
  {
    nombre: 'Sergio',
    edad: 25 ,
  },
  {
    nombre: 'Pablo',
    edad: 27,
  },
  {
    nombre: 'Oscar',
    edad: 28,
  },
];

function mostrarAlumnos(alumnos) {
  for (const alumno of alumnos) {
    console.log(alumno.nombre);
  }
}

mostrarAlumnos(alumnos);


// También vamos a crear una función que reciba un array 
// de pokemons y muestre por consola el nombre de cada pokemon 
// que sea de tipo fuego.


  
  function mostrarPokemonDeFuego(pokemons) {
    for (const pokemon of pokemons) {
      if (pokemon.tipo === 'fuego') {
        console.log(pokemon.nombre);
        
      }
    }
  }

  mostrarPokemonDeFuego(pokemons);

  