import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService} from 'primeng/api';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ClienteService } from 'src/app/sercives/cliente.service';
import { ClienteInterface } from 'src/app/models/cliente';
import { ActualizarclienteComponent } from '../actualizarcliente/actualizarcliente.component';

@Component({
  selector: 'app-clientes-tabla',
  templateUrl: './clientes-tabla.component.html',
  styleUrls: ['./clientes-tabla.component.scss'],
  providers: [MessageService, ConfirmationService]

})
export class ClientesTablaComponent implements OnInit {

  @ViewChild ("filter") filter!: ElementRef;
  
  clientes1: any;

  loading: boolean = true;

  suscription: Subscription = new Subscription();

  //Variables
  IDCLIENTE: number = 0;
  NOMBRES: string = "";
  APPATERNO: string = "";
  APMATERNO: string = "";
  DOCIDENTIDAD: number = 0;
  CORREO: string = "";
  CELULAR: number = 0;

  constructor(private conexion:ConexionService, private confirmationService: ConfirmationService, private messageService: MessageService, private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.conexion.GetClientes().subscribe(res =>{
      this.clientes1 = res;
    })
    this.suscription = this.conexion.refresh$.subscribe(() => {this.conexion.GetClientes().subscribe(res =>{
      this.clientes1 = res;
    })})
  }

  //OBSERVACIÓN: SOBRE CARGAR LA DATA QUE SE TIENE EN LA TABLA --> PARA LA SELECCIÓN DE LA TABLA
  cargaData(IDCLIENTE: number,NOMBRES: string, APPATERNO: string, APMATERNO: string,DOCIDENTIDAD: number, CORREO: string, CELULAR: number){
    this.IDCLIENTE = IDCLIENTE;
    this.NOMBRES = NOMBRES;
    this.APPATERNO = APPATERNO;
    this.APMATERNO= APMATERNO;
    this.DOCIDENTIDAD= DOCIDENTIDAD;
    this.CORREO=CORREO;
    this.CELULAR=CELULAR;
  };

    upSubmit(){
    this.conexion.upClientes(this.IDCLIENTE,this.NOMBRES,this.APPATERNO,this.APMATERNO,this.DOCIDENTIDAD,this.CORREO,this.CELULAR)
    .subscribe(res =>{
      this.NOMBRES= "";
      this.APPATERNO = "";
      this.APMATERNO= "";
      this.DOCIDENTIDAD= 0;
      this.CORREO= "";
      this.CELULAR= 0;
    });
  }

  deSubmit(IDCLIENTE:number){
    this.confirmationService.confirm({
      key: 'confirmar',
      message: '¿Seguro que desea eliminar?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this.conexion.deClientes(IDCLIENTE).subscribe((data)=>{
          this.conexion.GetClientes().subscribe(res =>{
            this.clientes1 = res;
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
