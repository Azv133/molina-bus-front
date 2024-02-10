import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Observable, Subject } from 'rxjs';
import { BusesInterface } from '../models/bus';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  _refresh$ = new Subject<void>();

  get refresh$(){
    return this._refresh$;
  }
  
  constructor(private http: HttpClient) { 
  }
  
  //MUESTRA DATOS EN LA TABLA
  GetBuses(){
    const url = 'http://localhost:4201/getBuses';
    return this.http.get(url);
  }

  //PERMITE INSERTAR NUEVOS DATOS EN LA TABLA
  addBuses(PLACA: string, MARCA: string, FECHACOMPRA: string,NUMASIENTOS: number, MODELOANIO: string, KILOMETRAJE: number,ESTADO: string){
    const url = "http://localhost:4201/addBuses"
    return this.http.post(
      url,
      { "PLACA":PLACA, 
        "MARCA":MARCA, 
        "FECHACOMPRA":FECHACOMPRA,
        "NUMASIENTOS":NUMASIENTOS,
        "MODELOANIO":MODELOANIO,
        "KILOMETRAJE":KILOMETRAJE,
        "ESTADO":ESTADO
      },
    
    ).pipe(map(data => data)).pipe(tap(
      () => {
        this._refresh$.next();
      }
    )); //Ordena 
  }

  //ACTUALIZA DATOS EN LA TABLA
  upBuses(IDBUS: number, PLACA: string, MARCA: string, FECHACOMPRA: string,NUMASIENTOS: number, MODELOANIO: string, KILOMETRAJE: number,ESTADO: string){
    const url = "http://localhost:4201/updateBuses"
    return this.http.put(
      url,
      {
        "IDBUS":IDBUS,
        "PLACA":PLACA, 
        "MARCA":MARCA, 
        "FECHACOMPRA":FECHACOMPRA,
        "NUMASIENTOS":NUMASIENTOS,
        "MODELOANIO":MODELOANIO,
        "KILOMETRAJE":KILOMETRAJE,
        "ESTADO":ESTADO
      },

    ).pipe(map(data => data)).pipe(tap(
      () => {
        this._refresh$.next();
      }
    ));
  }

  //ELIMINAR DATOS EN LA TABLA
  deBuses(IDBUS: number){
    const url = "http://localhost:4201/deleteBuses/"+IDBUS;
    return this.http.delete(url).pipe(map(data => data));
  }
  /////////////////////////////////////////////
  //////////// MULTAS API - BUSES /////////////
  ////////////////////////////////////////////
  getMultas(){
    const url= "https://www.datos.gov.co/resource/x8g3-nn2c.json";
    return this.http.get(url);
  }

  ////////////////////////////////////
  //////////// CLIENTES //////////////
  ////////////////////////////////////

  //Muestra datos en la tabla 
  GetClientes(){
    const url = "http://localhost:4201/getClientes"
    return this.http.get(url);
  }

  //PERMITE INSERTAR NUEVOS DATOS EN LA TABLA
  addClientes(NOMBRES: string, APPATERNO: string, APMATERNO: string,DOCIDENTIDAD: number, CORREO: string, CELULAR: number){
    const url = "http://localhost:4201/addClientes"
    return this.http.post(
      url,
      {"NOMBRES": NOMBRES, 
      "APPATERNO":APPATERNO, 
      "APMATERNO":APMATERNO,
      "DOCIDENTIDAD":DOCIDENTIDAD,
      "CORREO":CORREO,
      "CELULAR":CELULAR
      },
    
    ).pipe(map(data => data)).pipe(tap(
      () => {
        this._refresh$.next();
      }
    )); //ordena
  }

  //ACTUALIZA DATOS EN LA TABLA
  upClientes(IDCLIENTE: number, NOMBRES: string, APPATERNO: string, APMATERNO: string,DOCIDENTIDAD: number, CORREO: string, CELULAR: number){
    const url = "http://localhost:4201/updateClientes"
    return this.http.put(
      url,
      {
      "IDCLIENTE": IDCLIENTE,
      "NOMBRES": NOMBRES, 
      "APPATERNO":APPATERNO, 
      "APMATERNO":APMATERNO,
      "DOCIDENTIDAD":DOCIDENTIDAD,
      "CORREO":CORREO,
      "CELULAR":CELULAR
      },

    ).pipe(map(data => data)).pipe(tap(
      () => {
        this._refresh$.next();
      }
    ));
  }

  //ELIMINAR DATOS EN LA TABLA
  deClientes(IDBUS: number){
    const url = "http://localhost:4201/deleteClientes/"+IDBUS;
    return this.http.delete(url).pipe(map(data => data));
  }

  ////////////////////////////////////
  //////////// CHOFERES //////////////
  ////////////////////////////////////

  //Muestra datos en la tabla 
  GetChoferes(){
    const url = "http://localhost:4201/getChoferes"
    return this.http.get(url);
  }

  //PERMITE INSERTAR NUEVOS DATOS EN LA TABLA
  addChoferes(NOMBRES: string, APPATERNO: string, APMATERNO: string,DOCIDENTIDAD: number, FECHANAC: string, CELULAR: string, FECHACONTRATO: string, NUMBREVETE: string, CCI: string){
    const url = "http://localhost:4201/addChoferes"
    return this.http.post(
      url,
      {"NOMBRES": NOMBRES, 
      "APPATERNO":APPATERNO, 
      "APMATERNO":APMATERNO,
      "DOCIDENTIDAD":DOCIDENTIDAD,
      "FECHANAC": FECHANAC,
      "CELULAR": CELULAR,
      "FECHACONTRATO": FECHACONTRATO,
      "NUMBREVETE": NUMBREVETE,
      "CCI": CCI
      },
    
    ).pipe(map(data => data)).pipe(tap(
      () => {
        this._refresh$.next();
      }
    )); //ordena
  }

  //ACTUALIZA DATOS EN LA TABLA
  upChoferes(IDCHOFER: number, NOMBRES: string, APPATERNO: string, APMATERNO: string,DOCIDENTIDAD: number, FECHANAC: string, CELULAR: string, FECHACONTRATO: string, NUMBREVETE: string, CCI: string){
    const url = "http://localhost:4201/updateChoferes"
    return this.http.put(
      url,
      {
      "IDCHOFER": IDCHOFER,
      "NOMBRES": NOMBRES, 
      "APPATERNO":APPATERNO, 
      "APMATERNO":APMATERNO,
      "DOCIDENTIDAD":DOCIDENTIDAD,
      "FECHANAC": FECHANAC,
      "CELULAR": CELULAR,
      "FECHACONTRATO": FECHACONTRATO,
      "NUMBREVETE": NUMBREVETE,
      "CCI": CCI
      },

    ).pipe(map(data => data)).pipe(tap(
      () => {
        this._refresh$.next();
      }
    ));
  }

  //ELIMINAR DATOS EN LA TABLA
  deChoferes(IDBUS: number){
    const url = "http://localhost:4201/deleteChoferes/"+IDBUS;
    return this.http.delete(url).pipe(map(data => data));
  }
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////// ITINERARIOS ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   //Muestra datos en la tabla  de Itinerarios
   GetItinerarios(){
    const url = "http://localhost:4201/getItinerarios"
    return this.http.get(url);
  }

  
  //Insertar un nuevo itinerario
  addItinerarios(IDUNIDAD: number, ORIGEN: string, DESTINO: string,TIEMPOESTIMADO: string, FECHAVIAJE: string, HORASALIDA: string, PRECIO: number){
    const url = "http://localhost:4201/addItinerarios"
    return this.http.post(
      url,
      {"IDUNIDAD": IDUNIDAD, 
      "ORIGEN":ORIGEN, 
      "DESTINO":DESTINO,
      "TIEMPOESTIMADO":TIEMPOESTIMADO,
      "FECHAVIAJE":FECHAVIAJE,
      "HORASALIDA":HORASALIDA,
      "PRECIO":PRECIO
      },
    
    ).pipe(map(data => data)).pipe(tap(
      () => {
        this._refresh$.next();
      }
    )); //ordena
  }

  //Actualizar datos de un itinerario

  upItinerarios(IDITINERARIO:number,  IDUNIDAD: number, ORIGEN: string, DESTINO: string,TIEMPOESTIMADO: string, FECHAVIAJE: string, HORASALIDA: string, PRECIO: number){
    const url = "http://localhost:4201/addItinerarios"
    return this.http.post(
      url,
      {"IDITINERARIO":IDITINERARIO,
      "IDUNIDAD": IDUNIDAD, 
      "ORIGEN":ORIGEN, 
      "DESTINO":DESTINO,
      "TIEMPOESTIMADO":TIEMPOESTIMADO,
      "FECHAVIAJE":FECHAVIAJE,
      "HORASALIDA":HORASALIDA,
      "PRECIO":PRECIO
      },
    
    ).pipe(map(data => data)).pipe(tap(
      () => {
        this._refresh$.next();
      }
    )); //ordena
  }

  //ELIMINAR DATOS EN LA TABLA
  deItinerarios(IDITINERARIO: number){
    const url = "http://localhost:4201/deleteItinerarios/"+IDITINERARIO;
    return this.http.delete(url).pipe(map(data => data));
  }


}
