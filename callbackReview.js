/* Declare and Define the functions here that will make the function calls 
below work properly */


//my code...

function first(arr, cb) {
  return cb(arr[0]);
}


//what we were given....

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//my code...

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}


//what we were given...

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in 
//the array or not.

//my code...

function contains(str, arr, cb) {
  var result = true;

  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(str) !== -1) {
      return cb(result);
    }
  }
  result = false;
  return cb(result);

}

//what we were given...

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//my code...

function map(arr, cb) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var change = cb(arr[i]);
    result.push(change);
  }
  return result;
}

//what we were given...

var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a 
//transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//my code...

function uniq(arr, cb) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}


//what we were given...

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//my code...

function each(arr, cb) {
  arr.forEach(function(ele, index) {
    cb(ele, index);
  });
}

//what we were given..

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//my code...

function getUserById (str, arr, cb) {
  
  arr.forEach(function(ele) {
    for (var key in ele) {
      if (ele[key] === str) {
        return cb(ele);
      }
    }
  });
}

//what we were given...


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//my code...

function find(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}


//what we were given...


//Looks through each value in the list, returning the first one that 
//passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})











