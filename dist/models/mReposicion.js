import mSolicitud from "./mSolicitud.js";
// "mReposicion" hereda de "mSolicitud": cobra el costo base ($5) más $2 por cada extravío previo.
export default class mReposicion extends mSolicitud {
    // Cantidad de extravíos reportados anteriormente por el estudiante.
    _extraviosPrevios = 0;
    // Recargo adicional por cada extravío previo ($2).
    RECARGO_EXTRAVIO = 2;
    constructor({ cedula, nombre, extraviosPrevios, }) {
        // Primero inicializamos los atributos de la clase padre.
        super({ cedula, nombre });
        // Luego asignamos el dato propio de reposición.
        this.extraviosPrevios = extraviosPrevios;
    }
    // Convierte el valor a número con "+" y evita números negativos.
    set extraviosPrevios(valor) {
        const numero = +valor;
        this._extraviosPrevios = numero > 0 ? numero : 0;
    }
    // Devuelve la cantidad de extravíos previos.
    get extraviosPrevios() {
        return this._extraviosPrevios;
    }
    // Calcula el total: costo base ($5) + ($2 * cantidad de extravíos previos).
    montoPagar() {
        return this.COSTO_BASE + this._extraviosPrevios * this.RECARGO_EXTRAVIO;
    }
    // Indica que esta solicitud sí es una reposición.
    esReposicion() {
        return true;
    }
}
//# sourceMappingURL=mReposicion.js.map