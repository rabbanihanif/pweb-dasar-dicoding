console.log("selamat anda berhasil menggunakan java script pada website ini")

var firstName = "Harry";
console.log(firstName);
 
firstName = "Ron";
console.log(firstName);
 
/* output: 
Harry
Ron
*/
// -------------
x = 100;
var x;
console.log(x);
/* output: 100 */
// -------------
/*y = 200;
let y;
console.log(y);*/
/* ReferenceError: y is not defined */
// -------------
/*const z = 100;
console.log(z);

z = 300;
console.log(z)*/
/* TypeError: Assignment to constant variable. */
// -------------
// TIPE DATA
//--NUMBER
let v = 10;
console.log(typeof(v))
 
/* output: number */
 
let w = 17.25;
console.log(typeof(w))
 
/* output: number */
let a = 12;
let b = 9;
 
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
/* output:
21
3
108
1.3333333333333333
3*/

/*Increment dan Decrement */
let postfix = 5;
console.log(postfix++);
/* output: 5 */
 
let prefix = 5;
console.log(++prefix);
/* output: 6 */

//-----------------------------
//Strings
let greet = "Hello i'm baymax";
console.log(typeof(greet))
console.log("I'm baymax");
/* output: string */

let say = "Hello";
let gabung = say + say;
console.log(gabung);
/* output: HelloHello */

//-----------------------------
//Boolean
/*let t = true;
let f = false;
 
console.log(typeof(t))
console.log(typeof(f)) */
/* output: 
boolean
boolean
*/

const p = 10;
const q = 12;
 
let isGreater = p > q;
let isLess = p < q;
 
console.log(isGreater);
console.log(isLess);
/* output:
false
true
*/