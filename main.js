"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa_Agregacion_1 = require("./Empresa_Agregacion");
var DetalleDeFactura_Composicion_1 = require("./DetalleDeFactura_Composicion");
// Ejemplo de uso
var empresa = new Empresa_Agregacion_1.Empresa();
var factura1 = new DetalleDeFactura_Composicion_1.Factura("F001", new Date("2022-01-01"));
factura1.agregarDetalle(new DetalleDeFactura_Composicion_1.DetalleDeFactura("Producto 1", 2, 10));
factura1.agregarDetalle(new DetalleDeFactura_Composicion_1.DetalleDeFactura("Producto 2", 3, 20));
var factura2 = new DetalleDeFactura_Composicion_1.Factura("F002", new Date("2022-01-15"));
factura2.agregarDetalle(new DetalleDeFactura_Composicion_1.DetalleDeFactura("Producto 3", 1, 30));
factura2.agregarDetalle(new DetalleDeFactura_Composicion_1.DetalleDeFactura("Producto 4", 4, 40));
empresa.agregarFactura(factura1);
empresa.agregarFactura(factura2);
empresa.imprimirFacturas();
