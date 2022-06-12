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
