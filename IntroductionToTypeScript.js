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
//enskapsulasi
var Motor = /** @class */ (function () {
    function Motor(nomorMesin) {
        this.nomorMesin = nomorMesin;
    }
    Motor.prototype.tamplikanNomorMesin = function () {
        console.log("Nomor Mesin:", this.nomorMesin);
    };
    return Motor;
}());
var motor = new Motor("MX-123");
motor.tamplikanNomorMesin();
//abstraksi
var kendaraan = /** @class */ (function () {
    function kendaraan() {
    }
    return kendaraan;
}());
var Sepeda = /** @class */ (function (_super) {
    __extends(Sepeda, _super);
    function Sepeda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sepeda.prototype.bergerak = function () {
        console.log("Sepeda Dikayuh");
    };
    return Sepeda;
}(kendaraan));
var sepeda = new Sepeda();
sepeda.bergerak();
//inheritance
var Hewan = /** @class */ (function () {
    function Hewan(nama) {
        this.nama = nama;
    }
    Hewan.prototype.makan = function () {
        console.log(this.nama + " sedang makan");
    };
    return Hewan;
}());
var Kucing = /** @class */ (function (_super) {
    __extends(Kucing, _super);
    function Kucing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kucing;
}(Hewan));
var kucing = new Kucing("Milo");
kucing.makan();
//polimorfisme
var AlatCetak = /** @class */ (function () {
    function AlatCetak() {
    }
    AlatCetak.prototype.cetak = function () {
        console.log("Mencetak Foto");
    };
    return AlatCetak;
}());
var Printerfoto = /** @class */ (function (_super) {
    __extends(Printerfoto, _super);
    function Printerfoto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Printerfoto.prototype.cetak = function () {
        console.log("Mencetak Foto");
    };
    return Printerfoto;
}(AlatCetak));
var alat1 = new AlatCetak();
var alat2 = new Printerfoto();
alat1.cetak();
alat2.cetak();
