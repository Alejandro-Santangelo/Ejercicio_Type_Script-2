import { Factura } from './DetalleDeFactura_Composicion';

class Empresa {
  private facturas: Factura[];

  constructor() {
    this.facturas = [];
  }

  agregarFactura(factura: Factura) {
    this.facturas.push(factura);
  }

  imprimirFacturas() {
    console.log("Facturas de la empresa:");
    this.facturas.forEach((factura) => factura.imprimirFactura());
  }
}

export { Empresa };