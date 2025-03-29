
const celsiusInput = document.getElementById('celsius');
const farenheitInput = document.getElementById('farenheit');
const kelvinInput = document.getElementById('kelvin');
let isUpdating = false;

function round(value) {
    return Math.round(value * 100) / 100;
}

function clearAll(){
    celsiusInput.value = '';
    farenheitInput.value = '';
    kelvinInput.value = ''; 
  
}

function updateFromCelsius() {
    if(isUpdating) return;
    isUpdating = true;

    const value = celsiusInput.value

    if(value === '') {
        clearAll();
    }else if(!isNaN(value)) {
        const temp = parseFloat(value);
        farenheitInput.value = round((temp * 9/5) + 32);
        kelvinInput.value = round(temp + 273.15);
    }
    isUpdating = false;
}

function updateFromFarenheit() {
    if(isUpdating) return;
    isUpdating = true;

    const value = farenheitInput.value

    if(value === '') {
        clearAll();
    } else if(!isNaN(value)) {
        const temp = parseFloat(value);
        celsiusInput.value = round((temp - 32) * 5/9);
        kelvinInput.value = round((temp - 32) * 5/9 + 273.15);
    }
    isUpdating = false
}

function updateFromKelvin(){
    if(isUpdating) return;
    isUpdating = true;

    const value = kelvinInput.value

    if(value === '') {
        clearAll();
    }else if(!isNaN(value)) {
        const temp = parseFloat(value);
        celsiusInput.value = round(temp - 273.15);
        farenheitInput.value = round((temp - 273.15) * 9/5 + 32);
    }
    isUpdating = false;
}

celsiusInput.addEventListener('input',updateFromCelsius);
farenheitInput.addEventListener('input',updateFromFarenheit);
kelvinInput.addEventListener('input',updateFromKelvin)