function evalua(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue
    
    var inputText = document.getElementById("cadena").value;
    var hasUpperCase = /[A-Z]/.test(inputText);
    var hasLowerCase = /[a-z]/.test(inputText);
    var message = "";

    if (hasUpperCase && hasLowerCase) {
        message = "La cadena contiene tanto mayúsculas como minúsculas.";
    } else if (hasUpperCase) {
        message = "La cadena contiene solo mayúsculas.";
    } else if (hasLowerCase) {
        message = "La cadena contiene solo minúsculas.";
    } else {
        message = "La cadena no contiene ni mayúsculas ni minúsculas.";
    }

    document.getElementById("parrafo").textContent = message;
}
