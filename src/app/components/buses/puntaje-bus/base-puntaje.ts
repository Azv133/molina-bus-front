import { puntaje } from "./puntaje";

export class BasePuntaje implements puntaje{
    calcular(input: number): number {
        return input;
    }
}