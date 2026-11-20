import mSolicitud from "./mSolicitud.js";
export default class mReposicion extends mSolicitud {
    private _extraviosPrevios;
    private readonly RECARGO_EXTRAVIO;
    constructor({ cedula, nombre, extraviosPrevios, }: {
        cedula: string;
        nombre: string;
        extraviosPrevios: number;
    });
    set extraviosPrevios(valor: number);
    get extraviosPrevios(): number;
    montoPagar(): number;
    esReposicion(): boolean;
}
//# sourceMappingURL=mReposicion.d.ts.map