
// STRING METHODS
// 


// 1. JavaScript String Length
// This is used to get the length of characters in a string.
// Syntax: The syntax is str.length, where str is the string.
// 
// example1.
// let text = "abc";
// let length = text.length;
// console.log(length)
// 
// example2.
// let str = "I have a big house";
// let length = str.length;
// console.log(length);
// the space is also counted as a string- letters, symbols, digits, all strings
// 
// example3.
// let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = cap.length;
// console.log(length);


// 2. Extracting string characters 
// 
// 
// a. The charAt(position) Method
// The charAt() method returns the character at the specified index position
// 
// example1.
// let textCharacter = "HELLO WORLD";
// let char = textCharacter.charAt(9)
// console.log(char);
// 
// example2.
// let textCharacter1 = "hippopotamus";
// // let char = textCharacter1.charAt(7);
// console.log(textCharacter1.charAt(7));
// 
// 
// b. JavaScript String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string. It returns a UTF-16 code (an integer between 0 and 65535).
// 
// example1.
// let text3 = "HELLO WORLD";
// let char = text3.charCodeAt(4);
// console.log(char); 
// it returns a unicode of the character at a specific index
// 
// 
// c. Property Access []
// You can access individual characters in a string using the index position enclosed in square brackets []
// 
// example
// let text4 = "HELLO WORLD"
// console.log(text4[1]);


// 3. Extracting String Parts
// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)
// 
// 
// a. slice(start, end)-:extract a part of a string and return it as a new string.it includes two parameters, (the start and the end). The start parameter is the index of the first character to include in the returned substring, and the end parameter is the index of the first character to exclude from the returned substring.
// 
// example
let text5 = "hello there who is at the door?";
let slc = text5.slice(7, 9);
console.log(slc);


let text6 = "a cat has two bags, why is he a red cat?"
let slc2 = text6.slice(8,15)
console.log(slc2)


// b. substr(start,end)
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.


let text7 = "Who has the biggest bag in the class?"
let subs2 = text7.substr(7,6)
console.log(subs2);


let groceries = "Banana, Bread, eggs, milk, turkey";
let sub = groceries.substr(8);
console.log(sub);



// c. substring
// The difference is that start and end values less than 0 are treated as 0 in substring().
// its similar to slice. but the difference is that it treats indices less than 0 as 0


let groceries2 = "green, yellow, red, blue, white, black"

let subr = groceries2.substring(7,31)
console.log(subr);

// 4. Converting to upper or lower case
// A string is converted to uppercase with toUpperCase()
// A string is converted to lower case with the toLowerCase()


// a. Convert to upper case
let text8 = "my name is jesutoni adeleye"
let upper = text8.toUpperCase();
console.log(upper);


let text9 = "remedy to sadness is money"
let upper2 = text9.toUpperCase();
console.log(upper2);

// b. Convert to lower case
let text10 = "HOW ARE YOU";
// let lower1 = text10.toLowerCase();
console.log(text10.toLowerCase());

let text11 = "who is at the door";
console.log(text11.toLowerCase());


// 5. JavaScript string concat()
// concat joins 2 or more strings.

let text12 = "Jesutoni";
let text13 = "Adeleye"

let join = text12.concat(" ",text13);
// the empty string has space in it lol 
console.log(join);

let text14 ="eat";
let text15 = " two eggs";
let text16 = " drink water too";
console.log(text14.concat(text15, text16));


// 6. JavaScript String trim()
// The trim method removes white space from both sides of a string

let text17 = "      red, blue, yellow, green, brown       "
console.log(text17.trim());


let text18 = "          l    "
console.log(text18.trim());



// 7. JavaScript string trimStart()
// This is similar to trim but only removes white space from the start of the string

let text19 = "      who took the bag out of the cat?     "
let text20 = text19.trimStart();
let text21 = text19.trim()
console.log(text20);

console.log(text19.length);
console.log(text20.length);
console.log(text21.length);

// 8. JavaString trimEnd
// this is also similar to the thr trim method but this removes whitespace only from the end of the string


let text22 = "    a string  ";
console.log(text22.trimEnd());



// 9. JavaScript String Padding
// the padding method pads a string with a given string multiple times until it reaches the specified length

// padStart

// example- pad a string with "0" until it reaches the length 4

let text23 = "5";
console.log(text23.padStart(4,"0"));


// pad a string with "y" till it reaches a length of 100
let text24 = "69"
console.log(text24.padStart(100,"y"));

// padEnd
// adds the pad to the end of the String
let text25 = "house"
console.log(text25.padEnd(39,"MY"));


let text26 = "how";
console.log(text26.padEnd(300,"3"));


// JavaScript string repeat
// this methodd returns a new string with a couple of repeats of the original string

// eg

let text27 = "hello world "
console.log(text27.repeat(1));

///JavaScript String Replace
//this method replaces a specified value with another value in a string

//eg

let text28 = "who was at the gate?";
console.log(text28.replace("gate", "house"));


// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match it will replace only the first match.

let text29 = "pleaase get me eba andd eba"
console.log(text29.replace("eba","rice"));


//JavaScript String replaceAll

////////////////////////////////////////////

//Array Methods

//1. Array Length
// the length property returns the length size of the array

const fruits = ["banana", "bread","garri","eba"];
let size = fruits.length;
console.log(size);


const gym = ["dumbell", "weights", "jumprope"]
console.log(gym.length);

//2. JavaScript Array toString()
//this method converts an array to a string seperated by commas

const room = ["mirror", "chair", "bed", "duvet"];
let test = room.toString();
console.log(test);


const bed = ["pillow", "foam", "bedsheet", "duvet"];
let test2 = bed.toString();
console.log(test2);

//3.JavaScript array at()
// You can use this method to select a certain element in a string by specifying the index position of that element in the array


const beed = ["pillow", "foam", "bedsheet", "duvet"];
let test3 = beed.at(3);
console.log(test3);
console.log(beed.at(1));
console.log(beed[2]);
// the at() method returns the same as []



//4. The JavaScript String join 
// this joins arrays together into a string but allows you to specify a seperator


const beeed =  ["pillow", "foam", "bedsheet", "duvet"];

console.log(beeed.join(".."));
console.log(beeed.join("##"));


//5. popping and pushing.
// you can pop items out of an array and push items into an array


// the pop removes the last item out of an array 

const food = ["stew","white rice", "eba", "jollof", "ewedu"];
let remove = food.pop();
console.log(remove);

//The pop() method returns the value that was "popped out"


//push()
//push adds a new element to the end of an array and returns the new length of the array

const food2 = ["stew","whiterice", "eba", "jollof", "ewedu"];
let ad = food2.push("green")
console.log(ad);

const food3 = ["stew","whiterice", "eba", "jollof", "ewedu", "tacos"];
let ad1 = food3.push("cat")
console.log(ad1);

//6. Shifting elements 
// the shift method removes the first element and returns the remaining with a shifted index 
//it returns the value that was shifted out

let fruit = ["banana", "apple", "greens","lettuce", "brocolli"];
console.log(fruit.shift());

let fruit2 = ["apple", "greens","lettuce", "brocolli", "banana",];
console.log(fruit2.shift());


//unshift method- it adds a new element to an array and unshifts the older element
//it returns the new length of the array

let fruit3 = ["apple", "greens", "lettuce", "brocolli", "banana",];
console.log(fruit3.unshift("anana"));




//7. changing index
//you can change the index of an array

const fruit4 = ["apple", "greens", "lettuce", "brocolli", "banana",];
fruit4[2] = "eggs"
console.log(fruit4[2]);
console.log(fruit4);


//

const fruit5 = ["greens", "greens", "lettuce", "brocolli", "banana",];

fruit5[0]= "apple";
console.log(fruit5[0]);
console.log(fruit5);


////JavaScript Array length
//allows you to add a new element to a string

let fruit6 = ["greens", "greens", "lettuce", "brocolli", "banana",];
fruit6[fruit6.length]= "kiwi";
console.log(fruit6);

let fruit7 = ["greens", "greens", "lettuce", "brocolli", "banana",];
fruit7[fruit7.length]= "apples"
console.log(fruit7);

//merging arrays-concatening
//cocatening means joining strings end to end

//concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myTwins = ["Kehinde","Taiwo"]

const myKids = myGirls.concat(myBoys)
const allMyKids = myGirls.concat(myBoys,myTwins)
console.log(myKids);
console.log(allMyKids);

///the concat() method can also take a new string to be added to the array .it returns an array
const arr1 = ["Emil", "Tobias", "Linus"];
const arr2 = arr1.concat("Peter")
console.log(arr2);


//array copyWithin()
//it copies array elements to another position in the array

//Examples
// Copy to index 2, all elements from index 0:
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
const newFruit = fruits5.copyWithin(2,0)
console.log(newFruit);
console.log(fruits5 === newFruit);


const fruitss = ["Banana", "Orange", "Apple", "grape", "mango", "bread", "yam"]

console.log(fruitss.copyWithin(0,3,6));
console.log();



///Flatening an array
// to change a multi-dimensional array into a one dimensional array
//e.g
const dimen = [[1,2],[3,4],[5,6],[7,8]];
const dimen2 = dimen.flat()
console.log(dimen2);
console.log(dimen === dimen2);

