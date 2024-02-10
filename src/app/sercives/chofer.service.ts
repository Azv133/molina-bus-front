import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { ChoferInterface} from '../models/chofer';
import { ConexionService } from './conexion.service';


@Injectable({
  providedIn: 'root'
})

export class ChoferService{
  public IDCHOFER: number = 0;

  constructor(){}
}