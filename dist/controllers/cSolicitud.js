import mNuevo from "../models/mNuevo.js";
import mReposicion from "../models/mReposicion.js";
// Controlador menor: gestiona el proceso de llenar o cancelar una solicitud individual.
export default class cSolicitud {
    vista;
    // Guarda la función "callback" que se ejecutará cuando termine de crearse (o cancelarse) la solicitud.
    callback;
    constructor(vista) {
        this.vista = vista;
        // Usamos funciones flecha "() =>" para no perder la referencia a este controlador al hacer clic.
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    // Abre el formulario de solicitud y guarda qué hacer cuando el usuario termine.
    solicitarSolicitud(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    // Se ejecuta cuando el usuario confirma los datos de la solicitud.
    btAceptarOnClick() {
        const cedula = this.vista.cedula;
        const nombre = this.vista.nombre;
        const tipo = this.vista.tipoTramite;
        const extraviosPrevios = this.vista.extraviosPrevios;
        // Creamos la instancia hija correspondiente según el tipo de trámite elegido.
        const solicitud = tipo === "reposicion"
            ? new mReposicion({ cedula, nombre, extraviosPrevios })
            : new mNuevo({ cedula, nombre });
        this.vista.ocultar();
        // Entregamos la solicitud creada al controlador mayor.
        this.callback(solicitud);
    }
    // Se ejecuta si el usuario cancela el formulario.
    btCancelarOnClick() {
        this.vista.ocultar();
        // Avisamos que no se creó ninguna solicitud enviando "null".
        this.callback(null);
    }
}
//# sourceMappingURL=cSolicitud.js.map