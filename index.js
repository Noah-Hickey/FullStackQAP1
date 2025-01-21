#!/usr/bin/env node
const {program} = require('commander');

const generatePassword = (length,options) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'; //Lowercase characters//
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //Uppercase characters//
    const numbers = '0123456789';//Numbers//
    const symbols = '!@#$%^&*()_+[]{},./;:';//Symbools//

    //Concatenating the characters//
    let characters = lowercase + uppercase + numbers + symbols;
    if (options.uppercase) characters += uppercase;
    if (options.numbers) characters += numbers;
    if (options.symbols) characters += symbols;

    let password= '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
};

//CLI Options//
program
    .name('Password Generator')
    .description('A password generator CLI')
    .option('-l, --length <number>', 'length of password', '8')
    .option('-u, --uppercase', 'Include uppercase letters')
    .option('-n, --numbers', 'Include numbers')
    .option('-s, --symbols', 'Include special characters');

program.parse(process.argv);

const options = program.opts();
const length = parseInt(options.length);

//Input validation//

if (isNaN(length)) {
    console.log('Invalid length');
    process.exit(1);
}

//Generate password//
const password = generatePassword(length, options);
console.log('Your generated password is: ${password}');
        
//Message for the user//
console.log(`
    ==================================================
       Welcome to the Password Generator CLI!
    ==================================================
    `);
    
    console.log(`
    Usage Instructions:
      \x1b[33m Type generate-password --length <number> [options]\x1b[0m
    
    Options:
      \x1b[35m--length <number>\x1b[0m    Specify password length (default: 8)
      \x1b[35m--uppercase\x1b[0m         Include uppercase letters
      \x1b[35m--numbers\x1b[0m           Include numbers
      \x1b[35m--symbols\x1b[0m           Include special characters
      \x1b[35m--help\x1b[0m              Show this help message
    `);
    
    console.log(`
    Example Usage:
      \x1b[35mgenerate-password --length 12 --uppercase --numbers\x1b[0m
    `);
    