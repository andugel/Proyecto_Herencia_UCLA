// Vista principal: muestra el botón para agregar solicitudes, el reporte en una zona fija del HTML y los totales.
export default class vCarnetizacionPlain {
    btNueva;
    salidaSolicitud;
    lblTotalRecaudado;
    lblCantidadReposiciones;
    constructor() {
        // Buscamos los elementos fijos ya declarados en index.html.
        this.btNueva = document.getElementById("body_btNuevaSolicitud");
        this.salidaSolicitud = document.getElementById("body_salidaSolicitud");
        this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado");
        this.lblCantidadReposiciones = document.getElementById("body_lblCantidadReposiciones");
    }
    // Conecta el clic del botón "Nueva Solicitud" con la acción que indique el controlador.
    onNuevaSolicitud(callback) {
        this.btNueva.onclick = callback;
    }
    // Escribe el resultado de la solicitud dentro de la etiqueta fija definida en el HTML.
    reportarSolicitud({ nombre, cedula, monto, }) {
        this.salidaSolicitud.innerHTML += `${nombre} (${cedula}) debe pagar: $${monto}<br>`;
    }
    // Actualiza las etiquetas fijas del monto total recaudado y la cantidad de reposiciones.
    reportarTotales({ totalRecaudado, cantidadReposiciones, }) {
        this.lblTotalRecaudado.innerHTML = `$${totalRecaudado}`;
        this.lblCantidadReposiciones.innerHTML = `${cantidadReposiciones}`;
    }
}
//# sourceMappingURL=vCarnetizacionPlain.js.map