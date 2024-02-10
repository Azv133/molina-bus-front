import { BusesInterface } from "./bus";


export class Asiento{
    IDASIENTO: number=0;
    NUMASIENTO: number=0;
    TIPO: string="";
    ESTADO: number=0;
    BUS: BusesInterface;

    constructor(private bus:BusesInterface){
        this.BUS = this.bus;
    }

    ocupar(){
        this.ESTADO = 0;
    }

    desocupar(){
        this.ESTADO = 1;
    }
}