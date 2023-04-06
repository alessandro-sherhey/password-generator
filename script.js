const quantityInput = document.getElementById("quantityInput");
const lengthInput = document.getElementById("lengthInput");
const resultZone = document.getElementById("result");
const generatorButton = document.getElementById("generatePassword");

const passwordGenerator = () => {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = lengthInput.value - 1;
    let quantity = quantityInput.value;
    let passwordCount = 0;
    let password = "";
    
    resultZone.innerHTML = "";
    while (passwordCount < quantity) {
        for (let i = 0; i <= length; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        resultZone.innerHTML += `<h3>${password}</h3>`;
        password = "";
        passwordCount++;
    }
}
generatorButton.addEventListener("click", passwordGenerator);