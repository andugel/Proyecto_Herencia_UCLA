import mSolicitud from "./mSolicitud.js";
// "mNuevo" hereda de "mSolicitud": es un tipo de solicitud que solo paga el costo base ($5).
export default class mNuevo extends mSolicitud {
    constructor({ cedula, nombre }) {
        // "super" llama al constructor de mSolicitud para guardar cédula y nombre.
        super({ cedula, nombre });
    }
    // Sobrescribe el cálculo para dejar explícito que un carnet nuevo paga solo el costo base.
    montoPagar() {
        return this.COSTO_BASE;
    }
    // Un carnet nuevo no es una reposición.
    esReposicion() {
        return false;
    }
}
//# sourceMappingURL=mNuevo.js.map