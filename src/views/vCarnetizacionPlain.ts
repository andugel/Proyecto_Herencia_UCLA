import { iCarnetizacion } from "../interfaces/iCarnetizacion.js";

// Vista principal: muestra el botón para agregar solicitudes, el reporte en una zona fija del HTML y los totales.
export default class vCarnetizacionPlain implements iCarnetizacion {
  private btNueva: HTMLButtonElement;
  private salidaSolicitud: HTMLElement;
  private lblTotalRecaudado: HTMLElement;
  private lblCantidadReposiciones: HTMLElement;

  constructor() {
    // Buscamos los elementos fijos ya declarados en index.html.
    this.btNueva = document.getElementById("body_btNuevaSolicitud") as HTMLButtonElement;
    this.salidaSolicitud = document.getElementById("body_salidaSolicitud") as HTMLElement;
    this.lblTotalRecaudado = document.getElementById("body_lblTotalRecaudado") as HTMLElement;
    this.lblCantidadReposiciones = document.getElementById(
      "body_lblCantidadReposiciones"
    ) as HTMLElement;
  }

  // Conecta el clic del botón "Nueva Solicitud" con la acción que indique el controlador.
  onNuevaSolicitud(callback: () => void): void {
    this.btNueva.onclick = callback;
  }

  // Escribe el resultado de la solicitud dentro de la etiqueta fija definida en el HTML.
  reportarSolicitud({
    nombre,
    cedula,
    monto,
  }: {
    nombre: string;
    cedula: string;
    monto: number;
  }): void {
    this.salidaSolicitud.innerHTML += `${nombre} (${cedula}) debe pagar: $${monto}<br>`;
  }

  // Actualiza las etiquetas fijas del monto total recaudado y la cantidad de reposiciones.
  reportarTotales({
    totalRecaudado,
    cantidadReposiciones,
  }: {
    totalRecaudado: number;
    cantidadReposiciones: number;
  }): void {
    this.lblTotalRecaudado.innerHTML = `$${totalRecaudado}`;
    this.lblCantidadReposiciones.innerHTML = `${cantidadReposiciones}`;
  }
}