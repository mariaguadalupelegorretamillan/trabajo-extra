// el map es un array method crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// caso de uso: tenemos un array con numeros leatorias queremos obtener el array multiplicao x2

let arr = [2, 3, 4, 5];

let modifiedArr = arr.map(function(element){
    return element *2;
});

console.log(modifiedArr); // [4, 6, 8, 10]