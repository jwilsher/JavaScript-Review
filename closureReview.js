var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling 
//Jake at 435-215-9248' in your console.

  //code here

var inner = callFriend();
inner('435-215-9248');

/*

Write a function that accepts a function as it's first argument and 
//returns a new function (which calls the original function that was 
//passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be 
//executed N number of times. After the function has been called N number of
// times, console.log('STAHHP');

*/

//can only run once....

function myFunction(cb) {
	var flag = true;
	return function() {
		if (flag === true) {
			cb();
			flag = false;
		}
	}
}

function myName() {
	console.log('Jaclyn');
}

var inner = myFunction(myName);



inner(); // returns Jaclyn
inner(); // returns undefined



//can run N timess...


function myFunction(cb, N) {
	var flag = 0;
	return function() {
		if (flag < N) {
			cb();
			flag++;
		}
	}
}

function myName() {
	console.log('Jaclyn');
}

var inner = myFunction(myName, 3);



inner(); // returns Jaclyn
inner(); // retunrs Jaclyn
inner(); // returns Jaclyn
inner(); // returns undefined












