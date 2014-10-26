// var userChoice = 
// var computerChoice =

// function function_name (argument) {
// 	// body...
// }

// if (true) {

// } else{
	
// };

// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// };

function start(choice){
	var userChoice = choice;
	alert('userChoice ' + userChoice)
	var computerChoice = randomChoice();
	alert('computerChoice ' + computerChoice)
	var result = compare(userChoice, computerChoice);
	alert(result);
}

function randomChoice(){
	var i = Math.random();
	if (i < 0.34) {
		return 'rock';
	} else if (i < 0.67){
		return 'paper';
	} else{
		return 'scissors';
	}
}
function compare(a,b){
	if (a==b){
		return "tie";
	} else if ((a == 'paper') && (b == 'rock')) {
		return "win";
	}
	else if ((a == 'scissors') && (b == 'paper')) {
		return "win";
	}
	else if ((a == 'rock') && (b == 'scissors')) {
		return "win";
	} else {
		return "lose";
	}
}





