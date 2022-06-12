// el map es un array method crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// caso de uso: tenemos un array con numeros leatorias queremos obtener el array multiplicao x2

let arr = [2, 3, 4, 5];

let modifiedArr = arr.map(function(element){
    return element *2;
});

console.log(modifiedArr); // [4, 6, 8, 10]



// el filter crea un nuevo array con todos los elementos que cumplan la condición implementada por la función.
// caso de uso: tenemos un array con nombres de materias queremos obtener las materias que tengan una logitud mayor de 8 letras. 

const words = ['español', 'ingles', 'histora', 'tecnologia', 'ciencias', 'formacion'];

const result = words.filter(word => word.length > 8);

console.log(result);



// el find devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
// caso de uso: tenemos un array con una serie de numeros de manera alatoria queremos obtener el primer numero que sea mayor al numero 100.

const array1 = [3, 65, 103, 130, 90];

const found = array1.find(element => element > 100);

console.log(found);



// el reduce  ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.. 
// caso de uso: tenemos un array con una serie de numeros de manera alatoria queremos obtener el resultado de la operacion (resta) como unico resultado.

const array2 = [23, 54, 3, 90];

const initialValue = 0;
const sumWithInitial = array2.reduce(
  (previousValue, currentValue) => previousValue - currentValue,
  initialValue
);

console.log(sumWithInitial);


// el findIndex ejecuta la función de callback una vez por cada índice del array hasta que encuentre uno donde callback devuelva un valor verdadero.  
// caso de uso: tenemos un array con una serie de numeros de manera alatoria queremos encuentra  un elemento en el array que sea número primo de lo contrario este  devuelve -1. 

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start < 1) {
        return false;
      } else {
        start++;
      }
    }
    return element > 1;
  }
  
  console.log([20,26,32].findIndex(isPrime)); 
  console.log([6,5,4,4].findIndex(isPrime)); 


// el replace devuelve una nueva cadena con algunas o todas las coincidencias de un patrón. 
// caso de uso: tenemos un array con una cadena queremos que la primera palabra que coinsida sea remplazada. 

const p = 'The pizza restaurant is delicious';

console.log(p.replace('hamburger', 'people', 'pizza'));

const regex = /Pizza/i;
console.log(p.replace(regex, 'vegetable salad'));
