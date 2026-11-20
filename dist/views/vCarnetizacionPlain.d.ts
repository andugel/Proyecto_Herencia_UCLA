import { iCarnetizacion } from "../interfaces/iCarnetizacion.js";
export default class vCarnetizacionPlain implements iCarnetizacion {
    private btNueva;
    private salidaSolicitud;
    private lblTotalRecaudado;
    private lblCantidadReposiciones;
    constructor();
    onNuevaSolicitud(callback: () => void): void;
    reportarSolicitud({ nombre, cedula, monto, }: {
        nombre: string;
        cedula: string;
        monto: number;
    }): void;
    reportarTotales({ totalRecaudado, cantidadReposiciones, }: {
        totalRecaudado: number;
        cantidadReposiciones: number;
    }): void;
}
//# sourceMappingURL=vCarnetizacionPlain.d.ts.map