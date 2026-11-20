// Clase base (padre): representa cualquier solicitud de carnet y define lo que todas tienen en común.
export default class mSolicitud {
  // Usamos guion bajo (_) con "protected" para que las clases hijas puedan usar estos datos
  // sin provocar bucles infinitos al pasar por los getters y setters.
  protected _cedula: string = "";
  protected _nombre: string = "";
  // Costo base obligatorio para cualquier trámite ($5).
  protected readonly COSTO_BASE: number = 5;

  // Recibe los datos iniciales y los asigna usando los setters (que limpian y validan).
  constructor({ cedula, nombre }: { cedula: string; nombre: string }) {
    this.cedula = cedula;
    this.nombre = nombre;
  }

  // Guarda la cédula quitando espacios en blanco sobrantes.
  set cedula(valor: string) {
    this._cedula = valor.trim();
  }

  // Devuelve la cédula almacenada.
  get cedula(): string {
    return this._cedula;
  }

  // Guarda el nombre quitando espacios en blanco sobrantes.
  set nombre(valor: string) {
    this._nombre = valor.trim();
  }

  // Devuelve el nombre almacenado.
  get nombre(): string {
    return this._nombre;
  }

  // Calcula el monto a pagar; por defecto cobra el costo base ($5).
  // Las clases hijas pueden redefinir (sobrescribir) este método si necesitan cobrar algo extra.
  montoPagar(): number {
    return this.COSTO_BASE;
  }

  // Indica si esta solicitud corresponde a una reposición por extravío.
  esReposicion(): boolean {
    return false;
  }
}