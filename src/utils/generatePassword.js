const generatePassword = ({
    quantity, length, uppercase, lowercase, numbers, symbols, separators
}) => {
    let chars = "";
    let password = "";
    let array = [];

    if (uppercase) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
        chars += "0123456789";
    }
    if (symbols) {
        chars += "!@#$%^&*()";
    }

    for (let i = 0; i < quantity; i++) { 
        password = '';
        for (let i = 1; i <= length; i++) {
            if (separators && (i % 6 === 0)) {
                password += '-';
            } else {
                let rndInt = Math.floor(Math.random() * chars.length);
                password += chars.substring(rndInt, rndInt + 1);
            }
        }
        array.push(password)
    }
    return array;
}

export default generatePassword;