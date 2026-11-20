import mSolicitud from "./mSolicitud.js";

// "mNuevo" hereda de "mSolicitud": es un tipo de solicitud que solo paga el costo base ($5).
export default class mNuevo extends mSolicitud {
  constructor({ cedula, nombre }: { cedula: string; nombre: string }) {
    // "super" llama al constructor de mSolicitud para guardar cédula y nombre.
    super({ cedula, nombre });
  }

  // Sobrescribe el cálculo para dejar explícito que un carnet nuevo paga solo el costo base.
  override montoPagar(): number {
    return this.COSTO_BASE;
  }

  // Un carnet nuevo no es una reposición.
  override esReposicion(): boolean {
    return false;
  }
}