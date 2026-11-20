import mSolicitud from "./mSolicitud.js";
export default class mNuevo extends mSolicitud {
    constructor({ cedula, nombre }: {
        cedula: string;
        nombre: string;
    });
    montoPagar(): number;
    esReposicion(): boolean;
}
//# sourceMappingURL=mNuevo.d.ts.map