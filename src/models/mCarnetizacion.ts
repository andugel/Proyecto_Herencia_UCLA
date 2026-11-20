import mSolicitud from "./mSolicitud.js";

// Clase mayor: recibe cada solicitud una por una, acumula el dinero y cuenta las reposiciones.
export default class mCarnetizacion {
  // Acumulador del dinero total recaudado por el departamento.
  private acumRecaudado: number = 0;
  // Contador de cuántos carnets por reposición se han emitido.
  private contReposiciones: number = 0;

  // Procesa una solicitud (puede ser mNuevo o mReposicion, ya que ambos son mSolicitud).
  procesarSolicitud(solicitud: mSolicitud): void {
    // Suma lo que paga esta solicitud al total recaudado.
    this.acumRecaudado += solicitud.montoPagar();

    // Si es reposición, aumenta en 1 el contador de reposiciones.
    if (solicitud.esReposicion()) {
      this.contReposiciones++;
    }
  }

  // Devuelve el monto total recaudado hasta el momento.
  totalRecaudado(): number {
    return this.acumRecaudado;
  }

  // Devuelve la cantidad total de carnets emitidos por reposición.
  cantidadReposiciones(): number {
    return this.contReposiciones;
  }
}