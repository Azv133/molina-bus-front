import { Component, OnInit, Input } from '@angular/core';
import { BusesInterface } from 'src/app/models/bus';
import { BusService } from 'src/app/sercives/bus.service';
import { MenuItem } from 'primeng/api';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { BasePuntaje } from '../puntaje-bus/base-puntaje';
import { AnioPuntaje } from '../puntaje-bus/decorators/anio-puntaje';
import { MarcaPuntaje } from '../puntaje-bus/decorators/marca-puntaje';
import { KilometrajePuntaje } from '../puntaje-bus/decorators/kilometraje-puntaje';


@Component({
  selector: 'app-actualizarbus',
  templateUrl: './actualizarbus.component.html',
  styleUrls: ['./actualizarbus.component.scss']
})
export class ActualizarbusComponent implements OnInit {
  
  items: MenuItem[]=[];
  loading = [false, false, false, false];

  @Input() idbus: number=0;
  @Input() placa: string='';
  @Input() marca: string='';
  @Input() fechacompra: string='';
  @Input() numasientos: number=0;
  @Input() modeloanio: string = '';
  @Input() kilometraje: number=0;
  @Input() estado: string='';

  cad: string[] = [];
  
  busesaux: any;
  PLACA: string = "";
  MARCA: string = "";
  FECHACOMPRA:string='';
  NUMASIENTOS: number = 0;
  MODELOANIO: string='';
  KILOMETRAJE: number= 0;
  ESTADO: string = "";

  modeloAux: number=0;
  puntaje: number=0;

  constructor(private conexionService:ConexionService, private busservice:BusService) {
  
  }

  ngOnInit(): void {
    this.PLACA = this.placa;
    this.MARCA = this.marca;
    this.cad = this.fechacompra.split('-');
    this.FECHACOMPRA = this.cad[0]+'-'+this.cad[1]+'-'+this.cad[2].slice(0,2);
    this.NUMASIENTOS = this.numasientos;
    this.MODELOANIO = this.modeloanio;
    this.KILOMETRAJE = this.kilometraje;
    this.ESTADO = this.estado;

    this.calcularPuntaje();
  }
  cancelar(){
    this.PLACA = this.placa;
    this.MARCA = this.marca;
    this.cad = this.fechacompra.split('-');
    this.FECHACOMPRA = this.cad[0]+'-'+this.cad[1]+'-'+this.cad[2].slice(0,2);
    this.NUMASIENTOS = this.numasientos;
    this.MODELOANIO = this.modeloanio;
    this.KILOMETRAJE = this.kilometraje;
    this.ESTADO = this.estado;
  }
  
  onSubmit(){
      this.conexionService.upBuses(this.idbus,this.PLACA,this.MARCA,this.FECHACOMPRA,this.NUMASIENTOS,this.MODELOANIO,this.KILOMETRAJE,this.ESTADO)
      .subscribe((res) => {})
  }

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

  calcularPuntaje(){
    this.modeloAux = (Number)(this.modeloanio);
    let puntaje1 = new BasePuntaje();

    puntaje1 = new MarcaPuntaje(puntaje1,this.marca);
    puntaje1 = new AnioPuntaje(puntaje1,this.modeloAux);
    puntaje1 = new KilometrajePuntaje(puntaje1,this.kilometraje);

    this.puntaje = puntaje1.calcular(this.puntaje);
  }

}
