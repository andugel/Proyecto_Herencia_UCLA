export default class mSolicitud {
    protected _cedula: string;
    protected _nombre: string;
    protected readonly COSTO_BASE: number;
    constructor({ cedula, nombre }: {
        cedula: string;
        nombre: string;
    });
    set cedula(valor: string);
    get cedula(): string;
    set nombre(valor: string);
    get nombre(): string;
    montoPagar(): number;
    esReposicion(): boolean;
}
//# sourceMappingURL=mSolicitud.d.ts.map