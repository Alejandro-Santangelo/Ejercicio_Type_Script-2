"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.facturas = [];
    }
    Empresa.prototype.agregarFactura = function (factura) {
        this.facturas.push(factura);
    };
    Empresa.prototype.imprimirFacturas = function () {
        console.log("Facturas de la empresa:");
        this.facturas.forEach(function (factura) { return factura.imprimirFactura(); });
    };
    return Empresa;
}());
exports.Empresa = Empresa;
