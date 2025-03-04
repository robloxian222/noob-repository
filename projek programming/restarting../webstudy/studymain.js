var numbering = [1, 2, 3, 4];
var family = ['father', 'mother', 'son', 'daughter'];

console.log(numbering);
console.log("the father died of heart attack, and so all thats left is " + family.filter(member => member !== 'father'));

var box;
box = 25;
console.log(box); // undefined

var name = true;
 //the last assigned value replaces the previous
 var name = "John";
 //display the value of variable 'name'
 console.log(name);
 //John

 var age = 18;
 var currentYear = 2025;
 console.log(currentYear - age); //2007

var gems = 5;
var adder = gems--;
console.log(gems); //5


document.getElementById("demo").innerHTML = "Hello World!"; 

var username = prompt("masukkan username anda");
var password = prompt("masukkan password anda");
if(username === "admin" && password === "123"){
    alert("selamat datang " + username);
} else{
    alert("username atau password salah");
}