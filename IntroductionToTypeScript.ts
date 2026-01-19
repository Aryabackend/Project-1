//enskapsulasi
class Motor{
    private nomorMesin : string;
    constructor (nomorMesin: string){
        this.nomorMesin = nomorMesin;
    }
    public tamplikanNomorMesin():
    void{
        console.log("Nomor Mesin:", this.nomorMesin)
    }
}
const motor = new
Motor("MX-123");
motor.tamplikanNomorMesin();

//abstraksi
abstract class kendaraan{
    abstract bergerak(): void;
}
class Sepeda extends kendaraan{
    bergerak(): void {
        console.log("Sepeda Dikayuh")
    }
}
const sepeda = new Sepeda();
sepeda.bergerak();

//inheritance
class Hewan{
    nama: string;
    constructor(nama: string){
        this.nama=nama;
    }
    makan(): void{
        console.log(this.nama + " sedang makan");
    }
}
class Kucing extends Hewan{

}
const kucing = new Kucing("Milo");
kucing.makan();

//polimorfisme
class AlatCetak{
    cetak(): void {
        console.log("Mencetak Foto");
    }
}
class Printerfoto extends AlatCetak{
    cetak() : void{
        console.log("Mencetak Foto")
    }
}

const alat1: AlatCetak = new AlatCetak();
const alat2: AlatCetak = new Printerfoto();
alat1.cetak();
alat2.cetak();
