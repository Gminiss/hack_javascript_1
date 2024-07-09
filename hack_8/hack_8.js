/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
result.push(...arr.slice(1, 4)); 
for (let i = 0; i < 2; i++) { result[i] = result[i].replace('a', '@'); 
} 
result[result.length - 1] = result[result.length - 1].toUpperCase();

//export result
module.exports = result;