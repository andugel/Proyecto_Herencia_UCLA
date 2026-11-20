import { iSolicitud } from "../interfaces/iSolicitud.js";
export default class vSolicitudPlain implements iSolicitud {
    private seccion;
    private inCedula;
    private inNombre;
    private selTipo;
    private inExtravios;
    private contenedorExtravios;
    private btAceptar;
    private btCancelar;
    constructor();
    get cedula(): string;
    get nombre(): string;
    get tipoTramite(): string;
    get extraviosPrevios(): number;
    mostrar(): void;
    ocultar(): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}
//# sourceMappingURL=vSolicitudPlain.d.ts.map