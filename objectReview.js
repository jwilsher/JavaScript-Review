//Make a 'favoriteThings' object that contains the following
// keys: band, food, person, book, movie, holiday. 
//Have the values to those keys be your favorite thing in that category. 

  //Your code here

var favoriteThings = {
  band: 'Taylor Swift',
  food: 'pizza',
  person: 'Josh',
  book: 'Harry Potter',
  movie: 'The Sandlot',
  holiday: 'Christmas'
}

//After you've made your object, add another key named 'car' with the value 
//being your favorite car and then another key named 'brand' with the value 
//being your favorite brand.

  //Your code here

favoriteThings.car = 'Lexus';
favoriteThings.brand = 'Apple';

//Now change the food key in your favoriteThings object to be 'Lettuce' 
//and change the book key in your favoriteThings object to be
// '50 Shades of Gray'. 

  //Your code here

favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';

//Now, alert your favorite person, then alert your favorite book.

  //Your code here

alert(favoriteThings.person);
alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking 
//to make sure that each value is truthy. If it's not truthy, remove it from 
//the object. hint: 'delete'.

  //Your code here

for (var key in user) {
  if (!user[key]) {
    delete user[key];
  }
}

//Once you get your truthy object, Change the remaining values in the object
//to be specific to you (name: 'your name', username: 'your username'), 
//rather than my information.

  //Your code here

user.name = 'Jaclyn';
user.pwHash = 'whatisthis'
user.username = 'nicetry';


//Now console.log your object and make sure it looks right.

  //Your code here

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

  //Your code here

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your 
//methodCollection object. One called 'alertHello' which alerts 'hello' 
//and another method called logHello which logs 'hello' to the console. 

  //Your code here

methodCollection.alertHello = function() {
  alert('hello');
}

methodCollection.logHello = function() {
  console.log('hello');
}

//Now call your alertHello and logHello methods. 

  //Your code here

methodCollection.alertHello();
methodCollection.logHello();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns 
//an object with the keys being all the vowels in that string, and the 
//values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};


function voweler(str) {
  var vowelCounter = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };

  var vowelsArray = [];
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str.charAt(i) === vowels[j]) {
        vowelsArray.push(str.charAt(i));
      }
    }
  }

  console.log(vowelsArray);

  for (var i = 0; i < vowelsArray.length; i++) {
    if (vowelsArray[i] === 'a' || vowelsArray[i] === 'A') {
      vowelCounter.a = vowelCounter.a + 1;
    }
    if (vowelsArray[i] === 'e' || vowelsArray[i] === 'E') {
      vowelCounter.e = vowelCounter.e + 1;
    }
    if (vowelsArray[i] === 'i' || vowelsArray[i] === 'I') {
      vowelCounter.i = vowelCounter.i + 1;
    }
    if (vowelsArray[i] === 'o' || vowelsArray[i] === 'O') {
      vowelCounter.o = vowelCounter.o + 1;
    }
    if (vowelsArray[i] === 'u' || vowelsArray[i] === 'U') {
      vowelCounter.u = vowelCounter.u + 1;
    }
  }
  return vowelCounter;
}

voweler("This is a hello up string");


//the way we went over in class...

function voweler(str) {
  var result = {};
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) { // if the letter i am checking is in the vowels array, then it will not equal -1. If it equals -1, it is not in the array.
      console.log(str[i]);
      //add to the object and increment
      if (!result[str[i]]) {  // if the property doesn't exist, we create it and set equal to 1
        result[str[i]] = 1;
      }
      else {
        result[str[i]]++; // if the property does exist, you increment it
      }
    }
  }

  return result;
}

voweler('hello i am jon');




















