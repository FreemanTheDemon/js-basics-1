const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('Welcome to the password validator tool! Enter a password to validate: ', function(password){
    let goodChars = '!@#$%^&*()_+=-`~[{]};:|<>?.,';
    let goodNums = '0123456789';
    let hasGoodChar = false;
    let hasGoodNum = false;

    for (let i = 0; i < password.length; i++) {
        if (goodChars.indexOf(password[i]) !== -1) {
            hasGoodChar = true;
        }
        if (goodNums.indexOf(password[i]) !== -1) {
            hasGoodNum = true;
        }
    }

	if (password.length >= 15 && hasGoodChar && hasGoodNum) {
        console.log(`                                                               o .,<>., o
        |\/\/\/\/|
        '========'
        (_ SSSSSSs
        )a'`SSSSSs
       /_   SSSSSS
       .=## SSSSS
       .####  SSSSs
       ###::::SSSSS
      .;:::""""SSS
     .:;:'  . .  \\
    .::/  '     .'|
   .::( .         |
   :::)           \
   /\(            /
  /)            ( |
.'  \  .       ./ /
_-'    |\  .        |
_..--..   .  /"---\      | ` |      . |
-=====================,' _     \=(*#(7.#####()   |  `/_..   , (
_.-''``';'-''-) ,.  \ '  '+/// |   .'/   \  ``-.) \
,'  _.-  ((    `-'  `._\    `` \_/_.'  )    /`-._  ) |
,'\ ,'  _.'.`:-.    \.-'                 /   <_L   )"  |
_/   `._,' ,')`;  `-'`'                    |     L  /    /
/ `.   ,' ,|_/ / \                          (    <_-'     \
\ / `./  '  / /,' \                        /|`         `. |
)\   /`._   ,'`._.-\                       |)            \'
/  `.'    )-'.-,' )__)                      |\            `|
: /`. `.._(--.`':`':/ \                      ) \             \
|::::\     ,'/::;-))  /                      ( )`.            |
||:::::  . .::':  :`-(                       |/    .          |
||::::|  . :|  |==[]=:                       .        -       \
|||:::|  : ||  :  |  |                      /\           `     |
___ ___     '|;:::|  | |'   \=[]=|                     /  \                \
|   /_  ||``|||:::::  | ;    | |  |                     \_.'\_               `-.
:   \_``[]--[]|::::'\_;'     )-'..`._                 .-'\``:: ` .              \
\___.>`''-.||:.__,'     SSt |_______`>              <_____:::.         . . \  _/
    `+a:f:......jrei'''`)
		console.log('Success! Your password is without compare!');
	} else if (password.length >= 10 && hasGoodChar && hasGoodNum) {
		console.log('Success! Your password is amazing!');
    } else if ((password.length >= 10) && (hasGoodChar || hasGoodNum)) {
        console.log('Success! Your password is good!');
    } else if (password.length >= 10) {
		console.log('Success! Your password is ok!');
    } else {
        console.log('Faliure! Try to make your password longer. To make your password better, include more numbers and symbols.');
    }

	reader.close();
});