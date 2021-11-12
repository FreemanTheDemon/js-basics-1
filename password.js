const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question('Welcome to the password validator tool! Enter a password to validate: ', function(password){
	if (password.length >= 10) {
		console.log('Success! Your password is ok!')
	} else {
        console.log('Faliure! Try to make your password longer.')
    }
	reader.close()

});