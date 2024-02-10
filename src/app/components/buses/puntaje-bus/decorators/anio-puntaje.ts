import { puntaje } from "../puntaje";

export class AnioPuntaje implements puntaje{
    constructor(private readonly decorator: puntaje, private anio:number){}

    private puntaje: number = 0;

    calcular(input: number): number{

        this.puntajeMarca();

        input = input + this.puntaje;

        return this.decorator.calcular(input);
    }

    puntajeMarca(){
        if(this.anio > 2018){
            this.puntaje = 10;
        }else if(this.anio > 2010){
            this.puntaje = 7;
        }else if(this.anio > 2000){
            this.puntaje = 5;
        }else if(this.anio > 1990){
            this.puntaje = 3;
        }else{
            this.puntaje = 0;
        }
    }
}
