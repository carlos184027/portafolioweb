function genera_rfc() {
    var nombre = document.getElementById("nombre").value.trim().toUpperCase();
    var ap = document.getElementById("ap").value.trim().toUpperCase();
    var am = document.getElementById("am").value.trim().toUpperCase();
    var anio = document.getElementById("anio").value.trim();
    var mes = document.getElementById("mes").value.trim();
    var dia = document.getElementById("dia").value.trim();

    var rfc = ap.substring(0, 2) + am.substring(0, 1) + nombre.substring(0, 1) + anio.substring(2, 4) + mes + dia;

    document.getElementById("resultado").value = rfc;
}
