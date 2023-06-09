// Variables for the settings
const openSettingsButton = document.getElementById("openSettings");
const closeSettingsButton = document.getElementById("closeSettings");
const settingsBackground = document.getElementById("settings");
const settingsContainer = document.getElementById("settingsContainer");
let settingsStatus = 0;

// Variables for the main inputs and buttons
const quantityInput = document.getElementById("quantityInput");
const lengthInput = document.getElementById("lengthInput");
const resultZone = document.getElementById("result");
const generatorButton = document.getElementById("generatePassword");
const errorInfo = document.getElementById("error");

// Variables for the checkboxes
const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
const numbersCheckbox = document.getElementById("numbersCheckbox");
const symbolsCheckbox = document.getElementById("symbolsCheckbox");
const separatorsCheckbox = document.getElementById("separatorsCheckbox");

// Variables for the three password-related buttons
const copyButton = document.getElementById("copy");
const hideButton = document.getElementById("hide");
const clearButton = document.getElementById("clear");

// Variables for the "Sections" section in the settings
const includeButton = document.getElementById("include");
const excludeButton = document.getElementById("exclude");
const strengthMeterButton = document.getElementById("strength");
const footerButton = document.getElementById("footer");
const includeSection = document.getElementById("includeOptions");
const footerSection = document.querySelector("footer");
const allSections = document.getElementsByClassName("variablewidth");
let include = 1;
let exclude = 0;
let strengthMeter = 0;
let footer = 1;
let activeSections = 1;

// Dark mode buttons
const blueThemeButton = document.getElementById("blueButton");
const darkGreyThemeButton = document.getElementById("darkGreyButton");

// Language variables
let language = 0; // 0: english, 1: italian
const englishButton = document.getElementById("englishLanguage");
const italianButton = document.getElementById("italianLanguage");
const languageItems = document.getElementsByClassName("languageItem");
const englishArray = [
    "Password Generator",
    "PREVIEW",
    "Report a bug",
    "Settings",
    "Base Settings",
    "Quantity",
    "Length",
    "Include",
    "Uppercase",
    "Lowercase",
    "Numbers",
    "Symbols",
    "Separators",
    "Generate passwords",
    "Your Passwords:",
    "Copy passwords",
    "Hide passwords",
    "Delete passwords",
    `Made by
    <a href="https://alessandro-sherhey.github.io/alessandro-sherhey-website/" class="underline">
        Alessandro Sherhey
    </a>`,
    "GitHub Profile",
    "GitHub Repository",
    "Roadmap",
    "Settings",
    "These settings will be saved in your browser's storage.",
    "Language",
    "English",
    "Italian",
    "Sections",
    "Base Settings",
    "Include",
    "Exclude",
    "Strength Meter",
    "Result",
    "Footer",
    "Dark Mode Theme",
    "Blue",
    "Dark Grey",
    "Default Values",
    "Standard",
    "Multiple passwords",
    "Last used",
    "Custom",
    "version <strong>0.8</strong>",
    "This is just a <strong>preview</strong>. Most of the stuff won't work, and content may change at any moment.",
    "Some buttons aren't working? That's normal. Those functions are coming later!",
    "Close"
]
const italianArray = [
    "Generatore di password",
    "ANTEPRIMA",
    "Segnala un problema",
    "Impostazioni",
    "Opzioni di base",
    "Quantità",
    "Lunghezza",
    "Includi",
    "Maiuscole",
    "Minuscole",
    "Numeri",
    "Simboli",
    "Separatori",
    "Genera passwords",
    "Le tue passwords:",
    "Copia passwords",
    "Nascondi passwords",
    "Elimina passwords",
    `Fatto da
    <a href="https://alessandro-sherhey.github.io/alessandro-sherhey-website/" class="underline">
        Alessandro Sherhey
    </a>`,
    "Il mio profilo GitHub",
    "Repository GitHub",
    "Traguardi",
    "Impostazioni",
    "Queste impostazioni saranno salvate nella memoria del tuo browser.",
    "Lingua",
    "Inglese",
    "Italiano",
    "Sezioni",
    "Impostazioni di base",
    "Includi",
    "Escludi",
    "Sicurezza",
    "Risultato",
    "Footer",
    "Tema modalità scura",
    "Blu",
    "Grigio scuro",
    "Valori prefefiniti",
    "Standard",
    "Password multiple",
    "Ultimi usati",
    "Personalizzato",
    "versione <strong>0.8</strong>",
    "Questa è solo un'<strong>anteprima</strong>. La maggior parte delle cose non funzionerà, e il contenuto potrebbe cambiare in ogni momento.",
    "Alcuni pulsanti non funzionano? E' normale. Quelle funzioni arriveranno in futuro!",
    "Chiudi"
]

// Default Values Variables
const standardValuesButton = document.getElementById("standardValues");
const multiplePasswordsValuesButton = document.getElementById("multiplePasswordsValues");
const lastUsedValuesButton = document.getElementById("lastUsedValues");
const customValuesButton = document.getElementById("customValues");
let defaultValues = 1; // standard: 1, multiple: 2, lastused: 3, custom: 4
let values = [0, 0]; // quantity, length
let lastUsedValues = [0, 0];
let customValues = [0, 0];

// Other variables
let hiddenStatus = false;
let tempResult = "";
let copyButtonState = 0;
const darkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
const root = document.querySelector(":root");
const main = document.querySelector("main");
const body = document.querySelector("body");
let width = window.innerWidth;

// Initializers for localStorage
if (localStorage.getItem("include")) {
    include = localStorage.getItem("include");
    includeButton.classList.remove("active");
    if (include == 1) {
        activeSections++;
        includeButton.classList.add("active");
        includeSection.style.display = "flex";
    }
} else {
    localStorage.setItem("include", 1);
    activeSections++;
}

// if (localStorage.getItem("exclude")) {
//     exclude = localStorage.getItem("exclude");
//     if (exclude == 1) {
//         activeSections++;
//     }
// } else {
//     localStorage.setItem("exclude", 0);
// }

// if (localStorage.getItem("strengthMeter")) {
//     strengthMeter = localStorage.getItem("strengthMeter");
//     if (strengthMeter == 1) {
//         activeSections++;
//     }
// } else {
//     localStorage.setItem("strengthMeter", 0);
// }

if (localStorage.getItem("footer")) {
    footer = localStorage.getItem("footer");
    footerButton.classList.remove("active");
    if (footer == 1) {
        footerButton.classList.add("active");
        footerSection.style.display = "flex";
    }
} else {
    localStorage.setItem("footer", 1);
}



if (localStorage.getItem("darkModeTheme")) {
    if (localStorage.getItem("darkModeTheme") == 2) {
        blueThemeButton.classList.remove("active");
        darkGreyThemeButton.classList.add("active");
        root.style.setProperty("--background-dark", "#111");
        root.style.setProperty("--foreground-dark", "#222");
    }
} else {
    localStorage.setItem("darkModeTheme", 1);
}

if(localStorage.getItem("language")) {
    if (localStorage.getItem("language") == 1) {
        italianButton.classList.add("active");
        englishButton.classList.remove("active");
        localStorage.setItem("language", 1);
        language = 1;
        
        for (let i = 0; i < languageItems.length; i++) {
            languageItems[i].innerHTML = italianArray[i];
        }
    }
} else {
    localStorage.setItem("language", 0);
}

if (localStorage.getItem("defaultValues")) {
    if (localStorage.getItem("defaultValues") == 1) {
        standardValuesButton.classList.add("active");
        multiplePasswordsValuesButton.classList.remove("active");
        lastUsedValuesButton.classList.remove("active");
        customValuesButton.classList.remove("active");
        defaultValues = 1;
        values = [1, 15];

    } else if (localStorage.getItem("defaultValues") == 2) {
        standardValuesButton.classList.remove("active");
        multiplePasswordsValuesButton.classList.add("active");
        lastUsedValuesButton.classList.remove("active");
        customValuesButton.classList.remove("active");
        defaultValues = 2;
        values = [10, 15];

    } else if (localStorage.getItem("defaultValues") == 3) {
        standardValuesButton.classList.remove("active");
        multiplePasswordsValuesButton.classList.remove("active");
        lastUsedValuesButton.classList.add("active");
        customValuesButton.classList.remove("active");
        defaultValues = 3;

        if (localStorage.getItem("lastUsedQuantity")) {
            quantityInput.value = localStorage.getItem("lastUsedQuantity");
            values[0] = localStorage.getItem("lastUsedQuantity")
        } else {
            localStorage.setItem("lastUsedQuantity", 0);
        }

        if (localStorage.getItem("lastUsedLength")) {
            lengthInput.value = localStorage.getItem("lastUsedLength");
            values[1] = localStorage.getItem("lastUsedLength");
        } else {
            localStorage.setItem("lastUsedLength", 0);
        }

    } else if (localStorage.getItem("defaultValues" == 4)) {
        standardValuesButton.classList.remove("active");
        multiplePasswordsValuesButton.classList.remove("active");
        lastUsedValuesButton.classList.remove("active");
        customValuesButton.classList.add("active");
        defaultValues = 4;
        values[0] = customValues[0];
        values[1] = customValues[1];
    }
} else {
    localStorage.setItem("defaultValues", 1);
}

// Fix for the bug where the webpage would load with sections at 50% width
const resizeSections = () => {
    if (width > 700) {
        for (let i = 0; i < allSections.length; i++) {
            allSections[i].style.width = `${100 / activeSections}%`;
        }
    } else {
        for (let i = 0; i < allSections.length; i++) {
            allSections[i].style.width = `100%`;
        }
    }
}
resizeSections();

window.addEventListener("resize", () => {
    width = window.innerWidth;
    // footerSection.style.top = "calc(100vh - 50px)";
    resizeSections();
});


// Function that generates the passwords, after checking if the input values are good
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
            values[0] = quantity;
            values[1] = quantity;
            lastUsedValues[0] = quantity;
            lastUsedValues[1] = length;
            
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
            if (language == 0) {
                error.innerHTML = "Insert a length value between 1 and 149.";
            } else if (language == 1) {
                error.innerHTML = "Inserisci una lunghezza tra 1 e 149.";
            }
        }
    } else {
        quantityInput.style.border = "2px solid red";
        if (language == 0) {
            error.innerHTML = "Insert a quantity value between 1 and 99.";
        } else if (language == 1) {
            error.innerHTML = "Inserisci una quantità tra 1 e 99.";
        }
        if (length < 1 || length > 149) {
            lengthInput.style.border = "2px solid red";
            if (language == 0) {
                error.innerHTML = "Insert a quantity value between 1 and 99, and a length value between 1 and 149.";
            } else if (language == 1) {
                error.innerHTML = "Inserisci una quantità tra 1 e 99, e una lunghezza tra 1 e 149.";
            }
        }
    }
}
generatorButton.addEventListener("click", generatePasswords);
document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        generatorButton.click();
    }
})


// Function that clears the result field
const clearPasswords = () => {
    resultZone.innerHTML = "";
}
clearButton.addEventListener("click", clearPasswords);
document.addEventListener("keypress", (e) => {
    if (e.key == "d") {
        clearButton.click();
    }
})


// Functions that show or hide the passwords
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


/* Function that removes the unnecessary stuff from the result field and copies
all passwords to the clipboard */
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
            if (language == 0) {
                copyButton.innerHTML = "Passwords copied!";
            } else if (language == 1) {
                copyButton.innerHTML = "Password copiate!";
            }
        } else {
            copyButton.style.backgroundColor = "var(--error)";
            copyButton.style.color = "white";
            if (language == 0) {
                copyButton.innerHTML = "Nothing to copy!";
            } else if (language == 1) {
                copyButton.innerHTML = "Nulla da copiare!";
            }
        }
        copyButtonState = 1;
        setTimeout(changeCopyButton, 2000);
    } else if (copyButtonState == 1){
        if (language == 0) {
            copyButton.innerHTML = "Copy Passwords";
        } else if (language == 1) {
            copyButton.innerHTML = "Copia Password";
        }
        if (darkMode == true) {
            copyButton.style.backgroundColor = "var(--dark-grey)";
            copyButton.style.color = "var(--text-dark)";
        } else {
            copyButton.style.backgroundColor = "var(--white)";
            copyButton.style.color = "black";
        }
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
    settingsContainer.style.display = "block";
    window.scroll(0, 0);
    settingsContainer.scroll(0, 0);
    settingsStatus = 1;
    body.style.overflowY = "hidden";
}
openSettingsButton.addEventListener("click", openSettings);

const closeSettings = () => {
    settingsBackground.style.display = "none";
    settingsContainer.style.display = "none";
    settingsStatus = 0;
    body.style.overflowY = "auto";
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

includeButton.addEventListener("click", () => {
    if (include == 1) {
        includeButton.classList.remove("active");
        includeSection.style.display = "none";
        localStorage.setItem("include", 0);
        activeSections--;
        include = 0;
    } else if (include == 0) {
        includeButton.classList.add("active");
        includeSection.style.display = "flex";
        localStorage.setItem("include", 1);
        activeSections++;
        include = 1;
    }

    if (width > 700) {
        for (let i = 0; i < allSections.length; i++) {
            allSections[i].style.width = `${100 / activeSections}%`;
        }
    }
})

footerButton.addEventListener("click", () => {
    if (footer == 1) {
        footerButton.classList.remove("active");
        footerSection.style.display = "none";
        localStorage.setItem("footer", 0);
        footer = 0;
    } else if (footer == 0) {
        footerButton.classList.add("active");
        footerSection.style.display = "flex";
        localStorage.setItem("footer", 1);
        footer = 1;
    }
})


// Functions for changing the theme of the dark mode
blueThemeButton.addEventListener("click", () => {
    blueThemeButton.classList.add("active");
    darkGreyThemeButton.classList.remove("active");
    localStorage.setItem("darkModeTheme", 1);
    root.style.setProperty("--background-dark", "#001833");
    root.style.setProperty("--foreground-dark", "#002248");
})

darkGreyThemeButton.addEventListener("click", () => {
    blueThemeButton.classList.remove("active");
    darkGreyThemeButton.classList.add("active");
    localStorage.setItem("darkModeTheme", 2);
    root.style.setProperty("--background-dark", "#111");
    root.style.setProperty("--foreground-dark", "#222");
})


// Functions for changing the language
englishButton.addEventListener("click", () => {
    italianButton.classList.remove("active");
    englishButton.classList.add("active");
    localStorage.setItem("language", 0);
    language = 0;

    for (let i = 0; i < languageItems.length; i++) {
        languageItems[i].innerHTML = englishArray[i];
    }
})

italianButton.addEventListener("click", () => {
    italianButton.classList.add("active");
    englishButton.classList.remove("active");
    localStorage.setItem("language", 1);
    language = 1;
    
    for (let i = 0; i < languageItems.length; i++) {
        languageItems[i].innerHTML = italianArray[i];
    }
})


standardValuesButton.addEventListener("click", () => {
    standardValuesButton.classList.add("active");
    multiplePasswordsValuesButton.classList.remove("active");
    lastUsedValuesButton.classList.remove("active");
    customValuesButton.classList.remove("active");
})

multiplePasswordsValuesButton.addEventListener("click", () => {
    standardValuesButton.classList.remove("active");
    multiplePasswordsValuesButton.classList.add("active");
    lastUsedValuesButton.classList.remove("active");
    customValuesButton.classList.remove("active");
})

lastUsedValuesButton.addEventListener("click", () => {
    standardValuesButton.classList.remove("active");
    multiplePasswordsValuesButton.classList.remove("active");
    lastUsedValuesButton.classList.add("active");
    customValuesButton.classList.remove("active");
})

customValuesButton.addEventListener("click", () => {
    standardValuesButton.classList.remove("active");
    multiplePasswordsValuesButton.classList.remove("active");
    lastUsedValuesButton.classList.remove("active");
    customValuesButton.classList.add("active");
})