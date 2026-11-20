export interface iSolicitud {
    get cedula(): string;
    get nombre(): string;
    get tipoTramite(): string;
    get extraviosPrevios(): number;
    mostrar(): void;
    ocultar(): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}
//# sourceMappingURL=iSolicitud.d.ts.map