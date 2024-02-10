import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { ClienteInterface} from '../models/cliente';
import { ConexionService } from './conexion.service';


@Injectable({
  providedIn: 'root'
})

export class ClienteService{
  public IDCLIENTE: number = 0;

  constructor(){}
}