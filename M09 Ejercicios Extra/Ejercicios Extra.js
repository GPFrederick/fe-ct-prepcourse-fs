/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrPadre = [];
   for (const elm in objeto) {
      var arrHijo = [];
      
      arrHijo.push(elm);
      arrHijo.push(objeto[elm]);

      arrPadre.push(arrHijo);
   }
   return arrPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   var arrString = string.split('');

   arrString.sort();

   for (var elm of arrString) {
      if (!objeto.hasOwnProperty(elm)) {
         objeto[elm] = 1;
      } else {
         var valor = objeto[elm];
         objeto[elm] = valor + 1;
      }
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus = [];
   var minus = [];

   function esMayuscula(letra) {
      return letra === letra.toUpperCase();
   }

   for (var elm in string) {
      if (esMayuscula(string[elm])) {
         mayus.push(string[elm]);
      } else {
         minus.push(string[elm]);
      }
   }

   return (mayus.concat(minus)).join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrSplit = frase.split(' ');
   var arrInverso = [];

   arrSplit.map( (elm) => {
      var arr = [];
      for (var e of elm) {
         arr.unshift(e);
      }
      arrInverso.push(arr);
   });
   return arrInverso.join(' ').replaceAll(',', '');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroStr = numero.toString();

   function reverse(str) {
      var splitArr = str.split('');

      var reverseArr = splitArr.reverse();
      
      return reverseArr.join('');
   }

   if (numeroStr === reverse(numeroStr)) {
      return "Es capicua";
   }
   return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var letras = ['a', 'b', 'c'];
   var strArr = string.split('');

   for (var elm in strArr) {
      for (var i of letras) {
         if (strArr[elm] === i) {
               strArr.splice(elm, 1);
         }
      }
   }
   return strArr.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function (a, b) {
      return a.length - b.length;
   });
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArr = [];

   for (var elm of array1) {
      if (array2.includes(elm)) {
         nuevoArr.push(elm);
      }
   }

   return nuevoArr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
