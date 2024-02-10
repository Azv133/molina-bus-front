import { puntaje } from "../puntaje";

export class KilometrajePuntaje implements puntaje{
    constructor(private readonly decorator: puntaje, private kilometraje:number){}

    private puntaje: number = 0;

    calcular(input: number): number{
        
        this.puntajeMarca();

        input = input + this.puntaje;

        return this.decorator.calcular(input);
    }

    puntajeMarca(){
        if(this.kilometraje > 50000 ){
            this.puntaje = 0;
        }else if(this.kilometraje > 20000){
            this.puntaje = 3;
        }else if(this.kilometraje > 10000){
            this.puntaje = 6;
        }else if(this.kilometraje > 5000){
            this.puntaje = 8;
        }else{
            this.puntaje = 10;
        }
    }
}