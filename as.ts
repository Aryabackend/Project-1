class Motor{
    private nomorMesin : string;
    constructor (nomorMesin: string){
        this.nomorMesin = nomorMesin;
    }
    tamplikanNomorMesin(){
        console.log("Nomor Mesin:", this.nomorMesin)
    }
}
const motor = new Motor("MX-123");
motor.tamplikanNomorMesin();
