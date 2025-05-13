tarea 23

/* Paso 1:
Vamos a crear una función que actúe como fábrica de androides.
En vez de usar claves repetidas como nombre: nombre,
vamos a utilizar la técnica de **abreviación de propiedades**.
*/

function crearAndroide(serie, esMovil) {
  return {
    serie,
    esMovil,
    emitirBeep() {
      console.log('Beep Boop');
    }
  };
}

/* Paso 2:
Probamos la función creando un nuevo objeto con el nombre
de unidad creada "unidadNueva", usando el modelo 'P-501'
y movilidad en false.
*/

const unidadNueva = crearAndroide('P-501', false);

/* Paso 3:
Verificamos que los valores hayan sido asignados correctamente,
usando console.log con las propiedades abreviadas.
*/

console.log(unidadNueva.serie);     // Esperado: 'P-501'
console.log(unidadNueva.esMovil);   // Esperado: false
