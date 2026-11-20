export interface iCarnetizacion {
    onNuevaSolicitud(callback: () => void): void;
    reportarSolicitud({ nombre, cedula, monto, }: {
        nombre: string;
        cedula: string;
        monto: number;
    }): void;
    reportarTotales({ totalRecaudado, cantidadReposiciones, }: {
        totalRecaudado: number;
        cantidadReposiciones: number;
    }): void;
}
//# sourceMappingURL=iCarnetizacion.d.ts.map