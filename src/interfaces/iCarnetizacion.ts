// Contrato que debe cumplir la vista principal del departamento de carnetización.
export interface iCarnetizacion {
  // Registra qué hacer cuando el usuario pulsa el botón para agregar una nueva solicitud.
  onNuevaSolicitud(callback: () => void): void;

  // Muestra en pantalla el detalle de una solicitud procesada.
  reportarSolicitud({
    nombre,
    cedula,
    monto,
  }: {
    nombre: string;
    cedula: string;
    monto: number;
  }): void;

  // Actualiza en pantalla los totales generales del departamento.
  reportarTotales({
    totalRecaudado,
    cantidadReposiciones,
  }: {
    totalRecaudado: number;
    cantidadReposiciones: number;
  }): void;
}