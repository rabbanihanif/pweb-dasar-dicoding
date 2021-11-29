//-----------------OBJEK------------------
let player = {
    name:{
        first: "Harry",
        last: "Potter"
    },  
    age: 20, 
    isMuggle: false, 
    stuff: ["Magic Wind", "Flying Car", "Owl"]
}; 
console.log("Hallo, nama saya " + player.firstName + " " + player.lastName);
console.log("Umur saya " + player.age + " tahun" +", "+"saya mempunyai "+"hewan peliharaan "+player.stuff[2]);

console.log("Hallo, nama saya "+ player.name.first + " " + player.name.last)
/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/