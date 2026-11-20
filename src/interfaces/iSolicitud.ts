// Contrato que debe cumplir cualquier vista encargada de capturar una solicitud de carnet.
export interface iSolicitud {
  // Obtiene la cédula escrita por el usuario en el formulario.
  get cedula(): string;

  // Obtiene el nombre del estudiante escrito en el formulario.
  get nombre(): string;

  // Obtiene el tipo de trámite elegido ("nuevo" o "reposicion").
  get tipoTramite(): string;

  // Obtiene la cantidad de extravíos previos reportados.
  get extraviosPrevios(): number;

  // Hace visible el formulario de solicitud en pantalla.
  mostrar(): void;

  // Oculta el formulario de solicitud de la pantalla.
  ocultar(): void;

  // Registra qué hacer cuando el usuario presiona el botón Aceptar.
  onAceptar(callback: () => void): void;

  // Registra qué hacer cuando el usuario presiona el botón Cancelar.
  onCancelar(callback: () => void): void;
}