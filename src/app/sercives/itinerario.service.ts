import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { ItinerarioInterface} from '../models/itinerario';
import { ConexionService } from './conexion.service';


@Injectable({
  providedIn: 'root'
})

export class ItinerarioService{
  public IDITINERARIO: number = 0;

  constructor(){}
}