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
  
  
  
  
  