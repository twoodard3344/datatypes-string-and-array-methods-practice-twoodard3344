let gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
let lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad",
];
let bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

// ----------------------------------------------------------------------
// Complete the Following Katas
// ----------------------------------------------------------------------

// Remember to also append the results to your HTML page for every kata!
// Use document.createElement() to create the HTML with JavaScript
// This should be in the format:
// <h3>Kata 0</h3>
// <div>["Your", "array", "result", "here"]</div>

// Remember to render your arrays with JSON.stringify();

// Hint: You could create a function which renders any result to the DOM,
// then just call this function inside each kata!  That way you only have to write code to render
// to the DOM once :)

function createAnELement(kataNum)
{
  let header = document.createElement("h3");
  header.textContent = `Kata ${kataNum}`;
  document.body.append(header);

  return header;
}

// Write a function that returns an array with the cities in 'gotCitiesCSV'.
function kata1() {
  // Your Code Here
  let arr = gotCitiesCSV.split(",");

  // Render to the DOM.
  let header = document.createElement("h3");
header.textContent = "Kata 1";
document.body.append(header);

let newElement = document.createElement("div");
newElement.textContent = JSON.stringify(arr);
  document.body.append(newElement);
  return arr; 

   // Return your result.
}
kata1(); // Remember to execute your function!

// Write a function that returns an array of words from the sentence in 'bestThing'.
function kata2() {
  // Your Code Here
  let arr = bestThing.split(" ");

 let header = document.createElement("h3");
header.textContent = "Kata 2";
document.body.append(header);

let newElement = document.createElement("div");
newElement.textContent = JSON.stringify(arr);
  document.body.append(newElement);
  return arr;

}
kata2();

// Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'.
function kata3() {
  // Your Code Here

  let sentTwo = gotCitiesCSV.split(",").join("; ");
  createAnELement(3)
  let newElement = document.createElement("div");
  newElement.textContent = sentTwo;
  document.body.append(newElement);
  return sentTwo;
}
kata3();

// Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'.
function kata4() {
  // Your Code Here
  let str = lotrCitiesArray.join(", ")
  createAnELement(4)
  let newELement = document.createElement("div");
  newELement.textContent = str;
  document.body.append(newELement)
  return str
}
kata4();

// Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'.
function kata5() {
  let arr = lotrCitiesArray.slice(0,5);
  createAnELement(5);
  let newElement = document.createElement("div");
  newElement.textContent =JSON.stringify(arr);
  document.body.append(newElement);
  return arr;
  // Your Code Here
}
kata5();

// Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'.
function kata6() {
  // Your Code Here

  let arr = lotrCitiesArray.slice(-5);
  createAnELement(6);
  let newElement = document.createElement("div");
  newElement.textContent =JSON.stringify(arr);
  document.body.append(newElement);
  return arr;

}
kata6();

// Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'.
function kata7() {
  // Your Code Here
  let newArr = lotrCitiesArray.slice(2,5);
  createAnELement(7);
  let newElement = document.createElement("div");
  newElement.textContent =JSON.stringify(newArr);
  document.body.append(newElement);
return newArr;
}
kata7();

// Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata8() {
  // Your Code Here
  lotrCitiesArray.splice(2,1);

  createAnELement(8);
  let newElement = document.createElement("div");
  newElement.textContent =JSON.stringify(lotrCitiesArray);
  document.body.append(newElement);

  
  return lotrCitiesArray;
}
kata8();

// Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata9() {
  // Your Code Here
  
  lotrCitiesArray.splice(5,2);
  createAnELement(9);
  let newElement = document.createElement("div");
  newElement.textContent =JSON.stringify(lotrCitiesArray);
  document.body.append(newElement);

  
  return lotrCitiesArray;
  
}
kata9();

// Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the modified 'lotrCitiesArray'.
function kata10() {
  // Your Code Here
  lotrCitiesArray.splice(1,0,'Rohan')

  createAnELement(10);
  let newElement = document.createElement("div");
  newElement.textContent =JSON.stringify(lotrCitiesArray);
  document.body.append(newElement);

  
  return lotrCitiesArray;
}
kata10();
// Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata11() {
  // Your Code Here
  lotrCitiesArray.splice(5,1
    ,'Deadest Marshes')

  createAnELement(11);
  let newElement = document.createElement("div");
  newElement.textContent =JSON.stringify(lotrCitiesArray);
  document.body.append(newElement);

  
  return lotrCitiesArray;
}
kata11();

// Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing'.
function kata12() {
  // Your Code Here
  let str = bestThing.slice(0,14);
  createAnELement(12)
  let newELement = document.createElement("div");
  newELement.textContent = str;
  document.body.append(newELement)
  return str

}
kata12();

// Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing'.
function kata13() {
  // Your Code Here
  let str = bestThing.slice(-12);

  createAnELement(13);
  let newElement = document.createElement("div");
  newElement.textContent = str;
  document.body.append(newElement);
  return str;

}
kata13();

// Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even').
function kata14() {
  // Your Code Here
  let str = bestThing.slice(23,38);

  createAnELement(14);
  let newElement = document.createElement("div");
  newElement.textContent = str;
  document.body.append(newElement);
  return str;
}
kata14();

// Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'.
function kata15() {
  
  // Your Code Here
  let str = bestThing.substring(69,81);

  createAnELement(15);
  let newElement = document.createElement("div");
  newElement.textContent = str;
  document.body.append(newElement);
  return str;
  
}
kata15();

// Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'.
function kata16() {
  // Your Code Here
  let str = bestThing.substring(23,38);

  createAnELement(16);
  let newElement = document.createElement("div");
  newElement.textContent = str;
  document.body.append(newElement);
  return str;
}
kata16();

// Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the modified array.
function kata17() {
  // Your Code Here
  lotrCitiesArray.pop()

  createAnELement(17);
  let newELement = document.createElement("div");
  newELement.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(newELement);

  return lotrCitiesArray;
  
}
kata17();

// Write a function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #17 to the back of the array and returns the modified array.
function kata18() {
  // Your Code Here
  lotrCitiesArray.push("Deadest Marshes")

  createAnELement(18);
  let newELement = document.createElement("div");
  newELement.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(newELement);

  return lotrCitiesArray;
}
kata18();

// Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the modified array.
function kata19() {
  // Your Code Here
lotrCitiesArray.shift();

  createAnELement(19);
  let newELement = document.createElement("div");
  newELement.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(newELement);

  return lotrCitiesArray;
}
kata19();

// Write a function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #19 to the front of the array and returns the modified array.
function kata20() {
  // Your Code Here
  lotrCitiesArray.unshift("Mordor");

  createAnELement(20);
  let newELement = document.createElement("div");
  newELement.textContent = JSON.stringify(lotrCitiesArray);
  document.body.append(newELement);

  return lotrCitiesArray;
}
kata20();

// ----------------------------------------------------------------------
// Optional Practice Problems - Complete these for extra practice
// ----------------------------------------------------------------------

// Remember to append the results of each kata to the page as well as return the result!

// Write a function that finds and returns the index of 'only' in 'bestThing'.
function kata21() {
  // Your Code Here
}
// Write a function that finds and returns the index of the last word in 'bestThing'.
function kata22() {
  // Your Code Here
}
// Write a function that finds and returns an array of all cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.).
function kata23() {
  // Your Code Here
}
// Write a function that finds and returns an array with all cities from 'lotrCitiesArray' that end with 'or'.
function kata24() {
  // Your Code Here
}
// Write a function that finds and returns an array with all the words in 'bestThing' that start with a 'b'.
function kata25() {
  // Your Code Here
}
// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Mirkwood'.
function kata26() {
  // Your Code Here
}
// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Hollywood'.
function kata27() {
  // Your Code Here
}
// Write a function that returns the index of 'Mirkwood' in 'lotrCitiesArray'.
function kata28() {
  // Your Code Here
}
// Write a function that finds and returns the first city in 'lotrCitiesArray' that has more than one word.
function kata29() {
  // Your Code Here
}
// Write a function that reverses the order of 'lotrCitiesArray' and returns the modified array.
function kata30() {
  // Your Code Here
}
// Write a function that sorts 'lotrCitiesArray' alphabetically and returns the modified array.
function kata31() {
  // Your Code Here
}
// Write a function that sorts 'lotrCitiesArray' by the number of characters in each city (i.e., shortest city names go first) and return the modified array.
function kata32() {
  // Your Code Here
}
