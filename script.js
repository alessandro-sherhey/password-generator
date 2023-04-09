const openSettingsButton = document.getElementById("openSettings");
const closeSettingsButton = document.getElementById("closeSettings");
const settingsBackground = document.getElementById("settings");
const settingsContainer = document.getElementById("settingsContainer");
let settingsStatus = 0;

const quantityInput = document.getElementById("quantityInput");
const lengthInput = document.getElementById("lengthInput");
const resultZone = document.getElementById("result");
const generatorButton = document.getElementById("generatePassword");
const errorInfo = document.getElementById("error");

const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
const numbersCheckbox = document.getElementById("numbersCheckbox");
const symbolsCheckbox = document.getElementById("symbolsCheckbox");
const separatorsCheckbox = document.getElementById("separatorsCheckbox");

const copyButton = document.getElementById("copy");
const hideButton = document.getElementById("hide");
const clearButton = document.getElementById("clear");

let hiddenStatus = false;
let tempResult = "";

let copyButtonState = 0;

const generatePasswords = () => {
    let chars = "";
    let length = lengthInput.value - 1;
    let quantity = quantityInput.value;
    let passwordCount = 0;
    let password = "";
    
    lengthInput.style.border = "1px solid rgb(230, 230, 230)";
    quantityInput.style.border = "1px solid rgb(230, 230, 230)";
    error.innerHTML = "";
    
    if (quantity > 0 && quantity < 100) {
        if (length > 0 && length < 150) {
            if (uppercaseCheckbox.checked == true) {
                chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            }
            if (lowercaseCheckbox.checked == true) {
                chars += "abcdefghijklmnopqrstuvwxyz";
            }
            if (numbersCheckbox.checked == true) {
                chars += "0123456789";
            }
            if (symbolsCheckbox.checked == true) {
                chars += "!@#$%^&*()";
            }
            
            resultZone.innerHTML = "";
            
            while (passwordCount < quantity) {
                for (let i = 1; i <= length + 1; i++) {
                    if ((separatorsCheckbox.checked == true) && (i % 6 == 0)) {
                        password += "-";
                    } else {
                        let randomNumber = Math.floor(Math.random() * chars.length);
                        password += chars.substring(randomNumber, randomNumber + 1);
                    }
                }
                resultZone.innerHTML += `<h3>${password}</h3>`;
                password = "";
                passwordCount++;
            }
        } else {
            lengthInput.style.border = "2px solid red";
            error.innerHTML = "Insert a length value between 1 and 149."
        }
    } else {
        quantityInput.style.border = "2px solid red";
        error.innerHTML = "Insert a quantity value between 1 and 99."
        if (length < 1 || length > 149) {
            lengthInput.style.border = "2px solid red";
            error.innerHTML = "Insert a quantity value between 1 and 99, and a length value between 1 and 149."
        }
    }
}
generatorButton.addEventListener("click", generatePasswords);
document.addEventListener("keypress", (e) => {
    if (e.key == "g") {
        generatorButton.click();
    }
})

const clearPasswords = () => {
    resultZone.innerHTML = "";
}
clearButton.addEventListener("click", clearPasswords);
document.addEventListener("keypress", (e) => {
    if (e.key == "d") {
        clearButton.click();
    }
})

const hidePasswords = () => {
    tempResult = resultZone.innerHTML;
    resultZone.innerHTML = `<i class="fa-sharp fa-solid fa-eye-slash"></i><h3>Passwords hidden</h3>`;
    hideButton.innerHTML = "Show Password";
    hiddenStatus = true;
}

const showPasswords = () => {
    resultZone.innerHTML = tempResult;
    tempResult = "";
    hideButton.innerHTML = "Hide Password";
    hiddenStatus = false;
}

hideButton.addEventListener("click", () => {
    if (hiddenStatus == false) {
        hidePasswords();
    } else if (hiddenStatus == true) {
        showPasswords();
    }
})
document.addEventListener("keypress", (e) => {
    if (e.key == 'h') {
        hideButton.click();
    }
})

const copyPasswords = () => {
    if (resultZone.innerHTML != "") {
    let resultContent = resultZone.innerHTML;
    let stringToCopy = resultContent.replaceAll('<h3>', '');
    stringToCopy = stringToCopy.replaceAll('</h3>', ' ');
    navigator.clipboard.writeText(stringToCopy);
    }
    if (copyButtonState == 0) {
        changeCopyButton();
    }
}
copyButton.addEventListener("click", copyPasswords);

const changeCopyButton = () => {
    if(copyButtonState == 0) {
        if (resultZone.innerHTML != "") {
            copyButton.style.backgroundColor = "var(--success)";
            copyButton.style.color = "white";
            copyButton.innerHTML = "Password copied!";
        } else {
            copyButton.style.backgroundColor = "var(--error)";
            copyButton.style.color = "white";
            copyButton.innerHTML = "Nothing to copy!";
        }
        copyButtonState = 1;
        setTimeout(changeCopyButton, 2000);
    } else if (copyButtonState == 1){
        copyButton.style.backgroundColor = "var(--background)";
        copyButton.style.color = "black";
        copyButton.innerHTML = "Copy Password";
        copyButtonState = 0;
    }
}
document.addEventListener("keypress", (e) => {
    if (e.key == "c") {
        copyButton.click();
    }
})


const openSettings = () => {
    settingsBackground.style.display = "flex";
    settingsContainer.style.display = "flex";
    settingsStatus = 1;
}
openSettingsButton.addEventListener("click", openSettings);

const closeSettings = () => {
    settingsBackground.style.display = "none";
    settingsContainer.style.display = "flex";
    settingsStatus = 0;
}
closeSettingsButton.addEventListener("click", closeSettings);

document.addEventListener("keypress", (e) => {
    if (e.key == 's') {
        if (settingsStatus == 0) {
            openSettings();
        } else if (settingsStatus == 1) {
            closeSettings();
        }
    }
})