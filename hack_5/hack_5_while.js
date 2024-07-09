/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let i = 0;
while (i < 4) {
    result.push(7 - i * 2);
    i++;
}
//export result
module.exports = result;