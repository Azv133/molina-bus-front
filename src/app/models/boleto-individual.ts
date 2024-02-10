import { BoletoInterface } from "./boleto";


export class BIndividual implements BoletoInterface{
    IDBOLETO: number=0;
    IDVENDEDOR: number=0;
    IDRESERVA: number=0;
    PRECIO: number=0;
    FECHAPAGO: string='';

    constructor(){}

    adicionar(boleto:BoletoInterface):void{
        console.log('No se puede adicionar en boletos individuales');
    }
    eliminar(boleto:BoletoInterface):void{
        console.log('No se puede eliminar');
    }
    buscar(boleto:BoletoInterface):boolean{
        if(boleto.IDBOLETO == this.IDBOLETO){
            return true;
        }else{
            return false;
        }
    }
}