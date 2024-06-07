/*import { DetalleDeFactura } from './DetalleDeFactura_Composicion';

class Factura {
  private numero: number;
  private detalles: DetalleDeFactura[];

  constructor(numero: number, detalles: DetalleDeFactura[]) {
    this.numero = numero;
    this.detalles = detalles;
  }

  imprimirFactura() {
    console.log(`Factura ${this.numero}:`);
    this.detalles.forEach((detalle) => {
      console.log(`  ${detalle.getDescripcion()} - ${detalle.getCantidad()} x ${detalle.getPrecio()}`);
    });
  }
}

export { Factura };*/

import { DetalleDeFactura } from './DetalleDeFactura_Composicion';

export class Factura {
  private numero: number;
  private detalles: DetalleDeFactura[];

  constructor(numero: number, detalles: DetalleDeFactura[]) {
    this.numero = numero;
    this.detalles = detalles;
  }

  imprimirFactura() {
    console.log(`Factura ${this.numero}:`);
    this.detalles.forEach((detalle) => {
      console.log(`  ${detalle.getDescripcion()} - ${detalle.getCantidad()} x ${detalle.getPrecio()}`);
    });
  }
}