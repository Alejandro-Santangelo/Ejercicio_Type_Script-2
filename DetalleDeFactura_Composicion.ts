export class Documento {
  private numero: string;

  constructor(numero: string) {
    this.numero = numero;
  }

  imprimirNumero() {
    console.log(`El número del documento es ${this.numero}`);
  }
}

export class Factura extends Documento {
  private fecha: Date;
  private detalles: DetalleDeFactura[];

  constructor(numero: string, fecha: Date) {
    super(numero);
    this.fecha = fecha;
    this.detalles = [];
  }

  agregarDetalle(detalle: DetalleDeFactura) {
    this.detalles.push(detalle);
  }

  imprimirFactura() {
    this.imprimirNumero();
    console.log(`La fecha de la factura es ${this.fecha.toLocaleDateString()}`);
    console.log("Detalles:");
    this.detalles.forEach((detalle) => {
      console.log(`  ${detalle.getDescripcion()} - ${detalle.getCantidad()} x ${detalle.getPrecio()}`);
    });
  }
}

export class DetalleDeFactura {
  private descripcion: string;
  private cantidad: number;
  private precio: number;

  constructor(descripcion: string, cantidad: number, precio: number) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
  }

  imprimirDetalle() {
    console.log(`Detalle: ${this.descripcion} x ${this.cantidad} = ${this.precio * this.cantidad}`);
  }

  getDescripcion(): string {
    return this.descripcion;
  }

  getCantidad(): number {
    return this.cantidad;
  }

  getPrecio(): number {
    return this.precio;
  }
}