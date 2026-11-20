import mCarnetizacion from "../models/mCarnetizacion.js";
import { iCarnetizacion } from "../interfaces/iCarnetizacion.js";
import cSolicitud from "./cSolicitud.js";

// Controlador mayor: conecta el modelo general de carnetización con la vista principal y el controlador menor.
export default class cCarnetizacion {
  private modelo: mCarnetizacion = new mCarnetizacion();
  private vista: iCarnetizacion;
  private controladorSolicitud: cSolicitud;

  constructor(vista: iCarnetizacion, controladorSolicitud: cSolicitud) {
    this.vista = vista;
    this.controladorSolicitud = controladorSolicitud;

    // Cuando el usuario haga clic en "Nueva Solicitud", iniciamos el flujo para capturarla.
    this.vista.onNuevaSolicitud(() => this.procesarUnaSolicitud());
  }

  // Solicita una nueva solicitud y, si no fue cancelada, la procesa y actualiza la pantalla.
  private procesarUnaSolicitud(): void {
    this.controladorSolicitud.solicitarSolicitud((solicitud) => {
      if (solicitud !== null) {
        // Enviamos la solicitud al modelo mayor para acumular montos y conteos.
        this.modelo.procesarSolicitud(solicitud);

        // Mostramos el resultado de esta solicitud en pantalla.
        this.vista.reportarSolicitud({
          nombre: solicitud.nombre,
          cedula: solicitud.cedula,
          monto: solicitud.montoPagar(),
        });

        // Actualizamos los totales generales del departamento.
        this.vista.reportarTotales({
          totalRecaudado: this.modelo.totalRecaudado(),
          cantidadReposiciones: this.modelo.cantidadReposiciones(),
        });
      }
    });
  }
}