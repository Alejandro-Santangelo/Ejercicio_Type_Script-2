import { Empresa } from './Empresa_Agregacion';
import { Factura, DetalleDeFactura } from './DetalleDeFactura_Composicion';

// Ejemplo de uso
const empresa = new Empresa();

const factura1 = new Factura("F001", new Date("2022-01-01"));
factura1.agregarDetalle(new DetalleDeFactura("Producto 1", 2, 10));
factura1.agregarDetalle(new DetalleDeFactura("Producto 2", 3, 20));

const factura2 = new Factura("F002", new Date("2022-01-15"));
factura2.agregarDetalle(new DetalleDeFactura("Producto 3", 1, 30));
factura2.agregarDetalle(new DetalleDeFactura("Producto 4", 4, 40));

empresa.agregarFactura(factura1);
empresa.agregarFactura(factura2);

empresa.imprimirFacturas();