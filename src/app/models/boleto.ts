export interface BoletoInterface{
    IDBOLETO: number;
    IDVENDEDOR: number;
    IDRESERVA: number;
    PRECIO: number;
    FECHAPAGO: string;

    adicionar(boleto:BoletoInterface):void;
    eliminar(boleto:BoletoInterface):void;
    buscar(boleto:BoletoInterface):boolean;
}
