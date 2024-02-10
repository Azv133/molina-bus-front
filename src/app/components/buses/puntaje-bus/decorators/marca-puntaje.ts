import { BusesInterface } from "src/app/models/bus";
import { puntaje } from "../puntaje";

export class MarcaPuntaje implements puntaje{
    constructor(private readonly decorator: puntaje, private marca:string){}

    private puntaje: number = 0;

    calcular(input: number): number{

        this.puntajeMarca();

        input = input + this.puntaje;

        return this.decorator.calcular(input);
    }

    puntajeMarca(){
       if(this.marca == "HYUNDAI"){
        this.puntaje = 8;
       }else if(this.marca == "VOLKSWAGEN"){
        this.puntaje = 7;
       }else if(this.marca == "MITSUBISHI"){
        this.puntaje = 9;
       }else if(this.marca == "JAC"){
        this.puntaje = 6;
       }else if(this.marca == "MERCEDES BENZ"){
        this.puntaje = 10;
       }else if(this.marca == "HIGHER"){
        this.puntaje = 6;
       }else{
        this.puntaje = 0;
       }
    }
}