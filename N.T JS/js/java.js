// FUNCION CON 0 PARAMETROS
const funcion1 = () => {
  console.log("¡Hola!");
};

funcion1(); 



// FUNCION CON 1 PARAMETROS
const funcion2 = (nombre) => {
    console.log(`Hola, ${nombre}!`);
  };
  
  funcion2("Ana");
  funcion2("Juan"); 



// FUNCION CON 2 O MAS PARAMETROS
  const persona = (nombre, apellido,edad) => {
    console.log(`NOMBRE : ${nombre} ${apellido}`);
    console.log(`EDAD : ${edad}`);
  };
  
  persona("Ana", "Pérez", 23);
  


//FUNCION CON 3 CONSTANTES
  const calcularAreaTriangulo = (base, altura) => {
    const area =  (base * altura)/2;
  
    return area;
  };
  
  const base = 12;
  const altura = 50;
  const areaTriangulo = calcularAreaTriangulo(base, altura);
  
  console.log(`Área del triángulo: ${areaTriangulo}`); 




//FUNCION CON 5 let

  const calcularPromedioCondicional = (numeros, condicion) => {
    let suma = 0;
    let cantidad = numeros.length;
    let promedio;
    let totalAprobados = 0;
    let porcentajeAprobados;
  
    for (let i = 0; i < cantidad; i++) {
      if (numeros[i] >= condicion) {
        totalAprobados++;
      }
      suma += numeros[i];
    }
  
    // Calcular el promedio
    promedio = suma / cantidad;
  
    // porcentaje de aprobados
    porcentajeAprobados = (totalAprobados / cantidad) * 100;
  
    return { promedio, porcentajeAprobados };
  };
  
  const listaNumeros = [4, 3, 3, 4, 5, 4.6, 4.5, 3, 2, 4];
  const resultado = calcularPromedioCondicional(listaNumeros, 3);
  
  console.log(`Promedio: ${resultado.promedio}`); // Imprime "5.5"
  console.log(`Porcentaje de aprobados: ${resultado.porcentajeAprobados}`); // Imprime "50"
  





//METODOS JS 

//getMonth(): Obtiene el mes de una fecha
  const fecha = new Date();

  const mes = fecha.getMonth() + 1; // Los meses se enumeran desde 0

  console.log("estamos en el mes :", mes); // Imprime el mes actual



//toFixed(decimals): Convierte un número a una cadena, 
//redondeando a un número específico de decimales.

const numero = 3.14159;
const N = numero.toFixed(2);

console.log("NUMERO REDONDEADO A 2 CIFRAS :",N);



// Math.random() Imprime un número aleatorio entre 0 y 1 
const numeroAleatorio = Math.random();

console.log("NUMMERO ALEATORIO 0 Y 1:",numeroAleatorio); 


//  encodeURIComponent(string): Codifica una cadena para su uso en una URL.
const nombre = "CARLOS CASTAÑO";

const nombreCodificado = encodeURIComponent(nombre);

console.log("NOMBRE CODIFICADO :",nombreCodificado); 


//decodeURIComponent(string): Decodifica una cadena previamente codificada con encodeURIComponent

const nombreDecodificado = decodeURIComponent(nombreCodificado);

console.log("NOMBRE DESCODIFICADO :",nombreDecodificado); 
