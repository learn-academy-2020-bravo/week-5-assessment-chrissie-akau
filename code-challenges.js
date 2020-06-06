// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
var secretCodeWord2 = "gobbledygook"


//create a function that takes in a string
const codedMessage = (string) => {
    //split string into an array
    let splitString = string.toLowerCase().split("")
    //.map to go through array and .replace 'a' with 4
    let replaceA= splitString.map(value => value.replace('a',4))
    //.map to go through replaceA array and .replace 'e' with 3
    let replaceE = replaceA.map(value => value.replace('e', 3))
    //.map to go through replaceE array and .replace 'i' with 1
    let replaceI = replaceE.map(value => value.replace('i', 1))
    //.map to go through replaceI array and .replace 'o' with 0
    let replaceO = replaceI.map(value => value.replace('o', 0))
        //return replaceO which will have all the replace vowels, and .join them back into a string
        return replaceO.join("")
}
        
console.log(codedMessage(secretCodeWord1))
// Expected output: "l4ck4d41s1c4l"
console.log(codedMessage(secretCodeWord2))
// Expected output: "g0bbl3dyg00k"


// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]

//create a function that takes in an array
const fruitsWithAnA = (array) => {
    //use .filter to go through array of strings, taking .toUpperCase to make the entire value upper case since there might be a word starting wiht a capital "A" and using .indexOf, to find the first instance of it.  We set it to !== -1, so it will return everything that does have an A.
    return array.filter(value => value.toUpperCase().indexOf("A") !== -1)
}
console.log(fruitsWithAnA(arrayOfWords))
// Expected output: "Apple" "Banana" "Peach"


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
var hand2 = [5, 5, 3, 3, 4]
var hand3 = [5, 5, 5, 5, 4]

//create a function that takes in an array
const fullHouse = (array) => {
    //create variable to hold object
    let hand = {}
    //for/of loop that iterates through array
    for(let x of array){
      hand[x] = (hand[x] || 0) + 1;
    }
    //create variable to hold the object that holds the values of the hand variable
    let value = Object.values(hand);
    //if statement going through each value and comparing them
    if((value[0] === 2 && value[1] === 3) || (value[1] === 2 && value[0] === 3)){
      return true;
    }
    return false;
  }
console.log(fullHouse(hand1))
// Expected output: true
console.log(fullHouse(hand2))
// Expected output: false
console.log(fullHouse(hand3))
// Expected output: false