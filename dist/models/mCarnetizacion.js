// Clase mayor: recibe cada solicitud una por una, acumula el dinero y cuenta las reposiciones.
export default class mCarnetizacion {
    // Acumulador del dinero total recaudado por el departamento.
    acumRecaudado = 0;
    // Contador de cuántos carnets por reposición se han emitido.
    contReposiciones = 0;
    // Procesa una solicitud (puede ser mNuevo o mReposicion, ya que ambos son mSolicitud).
    procesarSolicitud(solicitud) {
        // Suma lo que paga esta solicitud al total recaudado.
        this.acumRecaudado += solicitud.montoPagar();
        // Si es reposición, aumenta en 1 el contador de reposiciones.
        if (solicitud.esReposicion()) {
            this.contReposiciones++;
        }
    }
    // Devuelve el monto total recaudado hasta el momento.
    totalRecaudado() {
        return this.acumRecaudado;
    }
    // Devuelve la cantidad total de carnets emitidos por reposición.
    cantidadReposiciones() {
        return this.contReposiciones;
    }
}
//# sourceMappingURL=mCarnetizacion.js.map