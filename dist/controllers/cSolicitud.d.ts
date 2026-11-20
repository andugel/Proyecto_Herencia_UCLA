import { iSolicitud } from "../interfaces/iSolicitud.js";
import mSolicitud from "../models/mSolicitud.js";
export default class cSolicitud {
    private vista;
    private callback;
    constructor(vista: iSolicitud);
    solicitarSolicitud(callback: (solicitud: mSolicitud | null) => void): void;
    private btAceptarOnClick;
    private btCancelarOnClick;
}
//# sourceMappingURL=cSolicitud.d.ts.map