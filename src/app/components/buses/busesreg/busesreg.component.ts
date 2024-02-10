import { Component, OnInit,  ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { BusesInterface } from 'src/app/models/bus';
import { BusService } from 'src/app/sercives/bus.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { Subscription } from 'rxjs';
import { Console, error } from 'console';

@Component({
  selector: 'app-busesreg',
  templateUrl: './busesreg.component.html',
  providers: [MessageService, ConfirmationService]
})

export class BusesregComponent implements OnInit {
  
  @ViewChild('filter') filter!: ElementRef;

  buses1: any;

  loading: boolean = true;

  suscription: Subscription = new Subscription();

  //Variables
  IDBUS: number =0;
  PLACA: string = "";
  MARCA: string = "";
  FECHACOMPRA:string="";
  NUMASIENTOS: number = 0;
  MODELOANIO: string='';
  KILOMETRAJE: number= 0;
  ESTADO: string = "";

  constructor(private conexion:ConexionService, private confirmationService: ConfirmationService, private messageService: MessageService, private busService:BusService) { }

  ngOnInit(): void {
    
    this.conexion.GetBuses().subscribe(res =>{
      this.buses1 = res;
    })
    this.suscription = this.conexion.refresh$.subscribe(() => {this.conexion.GetBuses().subscribe(res =>{
      this.buses1 = res;
    })})
  }

  //OBSERVACIÓN: SOBRE CARGAR LA DATA QUE SE TIENE EN LA TABLA --> PARA LA SELECCIÓN DE LA TABLA
  cargaData(IDBUS: number,PLACA: string, MARCA: string, FECHACOMPRA: string,NUMASIENTOS: number, MODELOANIO: string, KILOMETRAJE: number,ESTADO: string){
    this.IDBUS = IDBUS;
    this.PLACA = PLACA;
    this.MARCA = MARCA;
    this.FECHACOMPRA= FECHACOMPRA;
    this.NUMASIENTOS= NUMASIENTOS;
    this.MODELOANIO=MODELOANIO;
    this.KILOMETRAJE=KILOMETRAJE;
    this.ESTADO= ESTADO;
  }

  eliminar(){

  }

  editar(){

  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------
  /*
  INFORMACIÓN:
      UN EVENTO (CLICK) --> CUANDO SELECCIONAS UNA FILA DE UNA TABLA: DENTRO DEL HTML
      (CLICK)="cargaData(bus.IDBUS,bus.PLACA,bus.MARCA,bus.FECHACOMPRA,bus.NUMASIENTOS,bus.MODELOANIO,bus.KILOMETRAJE,bus.ESTADO)"

      LUEGO ESTA INFO LO CARGAS DENTRO DE LA VENTANA QUE QUIERES ABRIR PARA LUEGO RECIÉN DESPUÉS QUE SE ABRE LA VENTA MODIFIQUES 
      LO QUE DESEES Y LUEGO AHÍ SUPONDRÉ QUE HABRÁ UN BOTON GUARDAR Y ESE BOTON LLAMARÍA A LA FUNCIÓN "upSubmit()" EN LO QUE RESPECTA
      AL EVENTO DE HACER CLICK ALGO ASÍ COMO:

        <button (click)="upSubmit()" type="submit" class="btn btn-warning btn-block">Guardar Cambios</button>"

  */

  upSubmit(){
    this.conexion.upBuses(this.IDBUS,this.PLACA,this.MARCA,this.FECHACOMPRA,this.NUMASIENTOS,this.MODELOANIO,this.KILOMETRAJE,this.ESTADO)
    .subscribe(res =>{
      this.PLACA = "";
      this.MARCA = "";
      this.FECHACOMPRA= "";
      this.NUMASIENTOS= 0;
      this.MODELOANIO='';
      this.KILOMETRAJE=0;
      this.ESTADO= "";
    })
  }

  deSubmit(IDBUS:number){
    this.confirmationService.confirm({
      key: 'confirmar',
      message: '¿Seguro que desea eliminar?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this.conexion.deBuses(IDBUS).subscribe((data)=>{
          this.conexion.GetBuses().subscribe(res =>{
            this.buses1 = res;
          });
        },(error)=>{
          console.log(error);
        })
      },
      reject: () => {
      }
    });
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
}
