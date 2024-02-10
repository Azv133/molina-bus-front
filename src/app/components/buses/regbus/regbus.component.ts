import { Component, OnInit } from '@angular/core';
import { BusesInterface } from 'src/app/models/bus';
import { BusService } from 'src/app/sercives/bus.service';
import { MenuItem } from 'primeng/api';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-regbus',
  templateUrl: './regbus.component.html',
})
export class RegbusComponent implements OnInit {

  items: MenuItem[]=[];
  loading = [false, false, false, false];

  busesaux: any;
  PLACA: string = "";
  MARCA: string = "";
  FECHACOMPRA:string='';
  NUMASIENTOS: number = 0;
  MODELOANIO: string='';
  KILOMETRAJE: number= 0;
  ESTADO: string = "";
  Buses: BusesInterface[] =[];


  estadoAux:string='';

  constructor(private conexionService:ConexionService, private busservice:BusService) { }



  ngOnInit(): void {
    this.items = [
        { label: 'Update', icon: 'pi pi-refresh' },
        { label: 'Delete', icon: 'pi pi-times' },
        { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
        { separator: true },
        { label: 'Setup', icon: 'pi pi-cog' }
    ];
    this.conexionService.GetBuses().subscribe((res)=>{
      console.log(res);
    })
  }

  cancelar(){
    this.PLACA = "";
    this.MARCA = "";
    this.FECHACOMPRA= "";
    this.NUMASIENTOS= 0;
    this.MODELOANIO='';
    this.KILOMETRAJE=0;
    this.ESTADO= "";
  }
  onSubmit(){
      //Revisar p-p
      this.conexionService.addBuses(this.PLACA,this.MARCA,this.FECHACOMPRA,this.NUMASIENTOS,this.MODELOANIO,this.KILOMETRAJE,this.ESTADO)
      .subscribe((res)=>{
        this.PLACA = "";
        this.MARCA = "";
        this.FECHACOMPRA= "";
        this.NUMASIENTOS= 0;
        this.MODELOANIO='';
        this.KILOMETRAJE=0;
        this.ESTADO= "";
      })
    
  }

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }
}
