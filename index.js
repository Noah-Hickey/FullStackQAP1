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
    .title('Password Generator')
    .description('A password generator CLI')
    .option(-l, --length <number> 'length of password', '8')
    .option(-u, --uppercase, 'include uppercase characters')
    .option(-n, --numbers, 'include numbers')
    .option(-s, --symbols, 'include symbols')
    .parse(process.argv);



        
