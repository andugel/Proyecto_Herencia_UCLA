// Clase base (padre): representa cualquier solicitud de carnet y define lo que todas tienen en común.
export default class mSolicitud {
    // Usamos guion bajo (_) con "protected" para que las clases hijas puedan usar estos datos
    // sin provocar bucles infinitos al pasar por los getters y setters.
    _cedula = "";
    _nombre = "";
    // Costo base obligatorio para cualquier trámite ($5).
    COSTO_BASE = 5;
    // Recibe los datos iniciales y los asigna usando los setters (que limpian y validan).
    constructor({ cedula, nombre }) {
        this.cedula = cedula;
        this.nombre = nombre;
    }
    // Guarda la cédula quitando espacios en blanco sobrantes.
    set cedula(valor) {
        this._cedula = valor.trim();
    }
    // Devuelve la cédula almacenada.
    get cedula() {
        return this._cedula;
    }
    // Guarda el nombre quitando espacios en blanco sobrantes.
    set nombre(valor) {
        this._nombre = valor.trim();
    }
    // Devuelve el nombre almacenado.
    get nombre() {
        return this._nombre;
    }
    // Calcula el monto a pagar; por defecto cobra el costo base ($5).
    // Las clases hijas pueden redefinir (sobrescribir) este método si necesitan cobrar algo extra.
    montoPagar() {
        return this.COSTO_BASE;
    }
    // Indica si esta solicitud corresponde a una reposición por extravío.
    esReposicion() {
        return false;
    }
}
//# sourceMappingURL=mSolicitud.js.map