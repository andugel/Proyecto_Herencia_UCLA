// Vista del formulario de solicitud usando elementos HTML sencillos.
export default class vSolicitudPlain {
    seccion;
    inCedula;
    inNombre;
    selTipo;
    inExtravios;
    contenedorExtravios;
    btAceptar;
    btCancelar;
    constructor() {
        // Buscamos los elementos del HTML por su ID.
        this.seccion = document.getElementById("solicitud");
        this.inCedula = document.getElementById("solicitud_inCedula");
        this.inNombre = document.getElementById("solicitud_inNombre");
        this.selTipo = document.getElementById("solicitud_selTipo");
        this.inExtravios = document.getElementById("solicitud_inExtravios");
        this.contenedorExtravios = document.getElementById("solicitud_divExtravios");
        this.btAceptar = document.getElementById("solicitud_btAceptar");
        this.btCancelar = document.getElementById("solicitud_btCancelar");
        // Mostramos u ocultamos el campo de extravíos previos según el tipo de trámite seleccionado.
        this.selTipo.onchange = () => {
            this.contenedorExtravios.hidden = this.selTipo.value !== "reposicion";
        };
    }
    get cedula() {
        return this.inCedula.value.trim();
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get tipoTramite() {
        return this.selTipo.value;
    }
    get extraviosPrevios() {
        return +this.inExtravios.value;
    }
    // Limpia los campos anteriores y muestra el formulario.
    mostrar() {
        this.inCedula.value = "";
        this.inNombre.value = "";
        this.selTipo.value = "nuevo";
        this.inExtravios.value = "0";
        this.contenedorExtravios.hidden = true;
        this.seccion.hidden = false;
    }
    // Oculta el formulario.
    ocultar() {
        this.seccion.hidden = true;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
}
//# sourceMappingURL=vSolicitudPlain.js.map