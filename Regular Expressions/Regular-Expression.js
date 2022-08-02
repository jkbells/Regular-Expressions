// 1. Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line

// Solution

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


// 2. Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

// Solution

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);


// 3. Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);

// Solution

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// 4. Ignore Case While Matching

let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);

// Solution

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

// 5. Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line

// Solution

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);


// 6. Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line

// Solution

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);


// 7. Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);

// Solution

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

// 8. Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line

// Solution

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line 

// 9. Match Letters of the Alphabet

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line

// Solution

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

// 10. Match Numbers and Letters of the Alphabet


let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

// Solution

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// 11. Match Single Characters Not Specified

let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

// Solution

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

// 12. Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);

// Solution

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // this is the solution
let result = difficultSpelling.match(myRegex);

// 13. Match Characters that Occur Zero or More Times


// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

// Solution

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

// 14. Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);

// Solution

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // it's the answer!
let result = text.match(myRegex);

// 15. Find One or More Criminals in a Hunt

let reCriminals = /./; // Change this line

// Solution

let reCriminals = /C+/; // Change this line


// 16. Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);w

// Solution

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);


// 17. Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);

// Solution

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

// 18. Match All Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// Solution

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

// 19. Match Everything But Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// Solution

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

// 20. Match All Numbers


let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;

// Solution

let numRegex = /\d/g;

// 21. Match All Non-Numbers

let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;

// Solution

let noNumRegex = /\D/g;

// 22. Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);

// Solution

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)

// 23. Match Whitespace

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);


// Solution

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);


// 24. Match Non-Whitespace Characters

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);

// Solution

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);


// 25. Specify Upper and Lower Number of Matches


let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);

// Solution

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);

// 25. Specify Only the Lower Number of Matches


let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);

// Solution

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);


// 26. Specify Exact Number of Matches

let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);

// Solution

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

// 27. Check for All or None

let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);

// Solution

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

// 28. Positive and Negative Lookahead


let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

// Solution

let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);


// 29. Check For Mixed Grouping of Characters

let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works

// Solution

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);


// 30. Reuse Patterns Using Capture Groups

let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);

// Solution

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);


// 31. Use Capture Groups to Search and Replace

let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);

// Solution

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);


// 32. Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line

// Solution

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

