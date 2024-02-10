import { BoletoInterface } from "./boleto";
import { BIndividual } from "./boleto-individual";


export class BCompuesto implements BoletoInterface{
    IDBOLETO: number=0;
    IDVENDEDOR: number=0;
    IDRESERVA: number=0;
    PRECIO: number=0;
    FECHAPAGO: string='';
    boletos: BIndividual[] = [];

    constructor(private b:BIndividual[]){
        this.boletos = b;
    }

    adicionar(boleto:BoletoInterface):void{
        this.boletos.push(boleto);
    }
    eliminar(boleto:BoletoInterface):void{
        this.boletos = this.boletos.filter(x => x.IDBOLETO != boleto.IDBOLETO);
    }
    buscar(boleto:BoletoInterface):boolean{
        let pos = this.boletos.findIndex(x => x.IDBOLETO == boleto.IDBOLETO);
        if(pos != -1){
            return true;
        }else{
            return false;
        }
    }
}