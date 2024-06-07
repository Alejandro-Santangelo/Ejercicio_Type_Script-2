"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleDeFactura = exports.Factura = void 0;
var Documento = /** @class */ (function () {
    function Documento(numero) {
        this.numero = numero;
    }
    Documento.prototype.imprimirNumero = function () {
        console.log("El n\u00FAmero del documento es ".concat(this.numero));
    };
    return Documento;
}());
var Factura = /** @class */ (function (_super) {
    __extends(Factura, _super);
    function Factura(numero, fecha) {
        var _this = _super.call(this, numero) || this;
        _this.fecha = fecha;
        _this.detalles = [];
        return _this;
    }
    Factura.prototype.agregarDetalle = function (detalle) {
        this.detalles.push(detalle);
    };
    Factura.prototype.imprimirFactura = function () {
        this.imprimirNumero();
        console.log("La fecha de la factura es ".concat(this.fecha.toLocaleDateString()));
        console.log("Detalles:");
        this.detalles.forEach(function (detalle) { return detalle.imprimirDetalle(); });
    };
    return Factura;
}(Documento));
exports.Factura = Factura;
var DetalleDeFactura = /** @class */ (function () {
    function DetalleDeFactura(descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    DetalleDeFactura.prototype.imprimirDetalle = function () {
        console.log("Detalle: ".concat(this.descripcion, " x ").concat(this.cantidad, " = ").concat(this.precio * this.cantidad));
    };
    DetalleDeFactura.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    DetalleDeFactura.prototype.getCantidad = function () {
        return this.cantidad;
    };
    DetalleDeFactura.prototype.getPrecio = function () {
        return this.precio;
    };
    return DetalleDeFactura;
}());
exports.DetalleDeFactura = DetalleDeFactura;
