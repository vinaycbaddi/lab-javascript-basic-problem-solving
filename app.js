// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var ProGrad_1 = "Vinay C Baddi";
var ProGrad_2 = "Naga Sai Chaitanya";
console.log(ProGrad_1);
console.log(ProGrad_2);


// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (ProGrad_1.length > ProGrad_2.length) {
    console.log("The driver has the longest name, it has " + ProGrad_1.length + " characters")
}
else if (ProGrad_2.length > ProGrad_1.length) {
    console.log("It seems that the navigator has the longest name, it has " + ProGrad_2.length + " characters")
}
else {
    console.log("Wow, you both have equally long names, " + ProGrad_1.length + " characters!")
}




// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.
let str = 'prograd';
let res = "";
let val = [];
for (let i = 0; i < (str.length - 1); i++) {
    if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
        res = res + str.charAt(i) + " ";
        val = val + i + " ";
    }
}
if (res === "") {
    console.log('no vowels');
}
else {
    console.log(res + val);
}




// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
let char;
let str1 = 'ProGrad';
let i = 0;
let upper = 0;
let lower = 0;
while (i <= (str1.length - 1)) {
    char = str1.charAt(i);
    if (char == char.toUpperCase()) {
        upper++;
    }
    else {
        lower++;
    }
    i++
}
console.log("Number of Uppercases = " + upper);
console.log("Number of Lowercases = " + lower);



// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
let a = 0;
let str2 = 'Prograd'
let ch = '';
while (a <= (str2.length - 1)) {
    ch = ch + str2.charAt(a).toUpperCase() + " ";
    a++;
}
console.log(ch);



// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
let c = 0;
let rev = '';
let navname = "Prograd";
let temp = navname.length - 1;;
while (c <= (navname.length - 1)) {
    rev = rev + navname.charAt(temp);
    temp--;
    c++;
}
console.log(rev);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(ProGrad_1 + " " + ProGrad_2);
console.log(ProGrad_2 + " " + ProGrad_1);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
let u = "luther";
let v = "alexandar";
if (u.localeCompare(v) == 1) {
    console.log("The driver's name goes first.");
}
else if (u.localeCompare(v) == -1) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
