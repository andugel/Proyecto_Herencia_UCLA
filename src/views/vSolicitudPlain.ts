import { iSolicitud } from "../interfaces/iSolicitud.js";

// Vista del formulario de solicitud usando elementos HTML sencillos.
export default class vSolicitudPlain implements iSolicitud {
  private seccion: HTMLElement;
  private inCedula: HTMLInputElement;
  private inNombre: HTMLInputElement;
  private selTipo: HTMLSelectElement;
  private inExtravios: HTMLInputElement;
  private contenedorExtravios: HTMLElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    // Buscamos los elementos del HTML por su ID.
    this.seccion = document.getElementById("solicitud") as HTMLElement;
    this.inCedula = document.getElementById("solicitud_inCedula") as HTMLInputElement;
    this.inNombre = document.getElementById("solicitud_inNombre") as HTMLInputElement;
    this.selTipo = document.getElementById("solicitud_selTipo") as HTMLSelectElement;
    this.inExtravios = document.getElementById("solicitud_inExtravios") as HTMLInputElement;
    this.contenedorExtravios = document.getElementById("solicitud_divExtravios") as HTMLElement;
    this.btAceptar = document.getElementById("solicitud_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("solicitud_btCancelar") as HTMLButtonElement;

    // Mostramos u ocultamos el campo de extravíos previos según el tipo de trámite seleccionado.
    this.selTipo.onchange = () => {
      this.contenedorExtravios.hidden = this.selTipo.value !== "reposicion";
    };
  }

  get cedula(): string {
    return this.inCedula.value.trim();
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }

  get tipoTramite(): string {
    return this.selTipo.value;
  }

  get extraviosPrevios(): number {
    return +this.inExtravios.value;
  }

  // Limpia los campos anteriores y muestra el formulario.
  mostrar(): void {
    this.inCedula.value = "";
    this.inNombre.value = "";
    this.selTipo.value = "nuevo";
    this.inExtravios.value = "0";
    this.contenedorExtravios.hidden = true;
    this.seccion.hidden = false;
  }

  // Oculta el formulario.
  ocultar(): void {
    this.seccion.hidden = true;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
}