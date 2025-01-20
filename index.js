const {program} = require('commander');

const generatePassword = (length,options) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{},./;:';

    let characters = lowercase + uppercase + numbers + symbols;
    