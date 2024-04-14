function generarTabla() {
    var numero = prompt("Ingrese un número para generar la tabla de multiplicar:");

    if (numero !== null && numero !== "") {
        var tablaHTML = "<h2>Tabla de Multiplicar del " + numero + "</h2><table>";
        for (var i = 1; i <= 10; i++) {
            tablaHTML += "<tr><td>" + numero + " x " + i + "</td><td>=</td><td>" + (numero * i) + "</td></tr>";
        }
        tablaHTML += "</table>";
        document.getElementById("tabla").innerHTML = tablaHTML;
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}
