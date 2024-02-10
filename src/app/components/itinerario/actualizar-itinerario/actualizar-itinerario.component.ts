import { Component, Input, OnInit } from '@angular/core';
import { ItinerarioInterface } from 'src/app/models/itinerario';
import { MenuItem } from 'primeng/api';
import { ItinerarioService } from 'src/app/sercives/itinerario.service';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-actualizar-itinerario',
  templateUrl: './actualizar-itinerario.component.html',
  styleUrls: ['./actualizar-itinerario.component.scss']
})
export class ActualizarItinerarioComponent implements OnInit {

  items: MenuItem[]=[];
  loading = [false, false, false, false];

  @Input() iditinerario: number=0;
  @Input() idunidad: number=0;
  @Input() origen: string='';
  @Input() destino: string='';
  @Input() tiempoestimado: string = '';
  @Input() fechaviaje: string='';
  @Input() horasalida: string = '';
  @Input() precio: number = 0;

  cad: string[] = [];

  itinerarioaux: any;
  IDUNIDAD: number= 0;
  ORIGEN: string = "";
  DESTINO: string = "";
  TIEMPOESTIMADO: string = "";
  FECHAVIAJE: string='';
  HORASALIDA: string="";
  PRECIO: number=0;

  constructor(private conexionService:ConexionService, private itinerarioService:ItinerarioService) { 
  }

  ngOnInit(): void {
    this.IDUNIDAD=this.idunidad;
    this.ORIGEN=this.origen;
    this.DESTINO=this.destino;
    this.TIEMPOESTIMADO=this.tiempoestimado;
    this.cad = this.fechaviaje.split('-');
    this.FECHAVIAJE=this.cad[0]+'-'+this.cad[1]+'-'+this.cad[2].slice(0,2);
    this.HORASALIDA=this.horasalida;
    this.PRECIO=this.precio;
  }

  cancelar(){
    this.IDUNIDAD=this.idunidad;
    this.ORIGEN=this.origen;
    this.DESTINO=this.destino;
    this.TIEMPOESTIMADO=this.tiempoestimado;
    this.cad = this.fechaviaje.split('-');
    this.FECHAVIAJE=this.cad[0]+'-'+this.cad[1]+'-'+this.cad[2].slice(0,2);
    this.HORASALIDA=this.horasalida;
    this.PRECIO=this.precio;
  }

  onSubmit(){
    this.conexionService.upItinerarios(this.iditinerario,this.IDUNIDAD,this.ORIGEN,this.DESTINO,this.TIEMPOESTIMADO,this.FECHAVIAJE,this.HORASALIDA, this.PRECIO)
    .subscribe((res) => {})
}

load(index: number) {
  this.loading[index] = true;
  setTimeout(() => this.loading[index] = false, 486);
}

}
