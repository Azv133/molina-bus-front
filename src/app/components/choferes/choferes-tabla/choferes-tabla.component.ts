import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService} from 'primeng/api';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ChoferService } from 'src/app/sercives/chofer.service';
import { ChoferInterface } from 'src/app/models/chofer';
import { ActualizarchoferComponent } from '../actualizarchofer/actualizarchofer.component';

@Component({
  selector: 'app-choferes-tabla',
  templateUrl: './choferes-tabla.component.html',
  styleUrls: ['./choferes-tabla.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ChoferesTablaComponent implements OnInit {
  
  @ViewChild ("filter") filter!: ElementRef;
  
  choferes1: any;

  loading: boolean = true;

  suscription: Subscription = new Subscription();

  //Variables
  IDCHOFER: number = 0;
  NOMBRES: string = "";
  APPATERNO: string = "";
  APMATERNO: string = "";
  DOCIDENTIDAD: number = 0;
  FECHANAC: string = "";
  CELULAR: string = "";
  FECHACONTRATO: string = "";
  NUMBREVETE: string = "";
  CCI: string = "";

  constructor(private conexion:ConexionService, private confirmationService: ConfirmationService, private messageService: MessageService, private choferService:ChoferService) { }

  ngOnInit(): void {
  this.conexion.GetChoferes().subscribe(res =>{
    this.choferes1 = res;
  })
  this.suscription = this.conexion.refresh$.subscribe(() => {this.conexion.GetChoferes().subscribe(res =>{
    this.choferes1 = res;
  })})
  }

    //OBSERVACIÓN: SOBRE CARGAR LA DATA QUE SE TIENE EN LA TABLA --> PARA LA SELECCIÓN DE LA TABLA
    cargaData(IDCHOFER: number,NOMBRES: string, APPATERNO: string, APMATERNO: string,DOCIDENTIDAD: number, FECHANAC: string, CELULAR: string, FECHACONTRATO: string, NUMBREVETE: string, CCI: string){
      this.IDCHOFER = IDCHOFER;
      this.NOMBRES = NOMBRES;
      this.APPATERNO = APPATERNO;
      this.APMATERNO= APMATERNO;
      this.DOCIDENTIDAD= DOCIDENTIDAD;
      this.FECHANAC = FECHANAC;
      this.CELULAR=CELULAR;
      this.FECHACONTRATO = FECHACONTRATO;
      this.NUMBREVETE = NUMBREVETE;
      this.CCI = CCI;

    };
  
      upSubmit(){
      this.conexion.upChoferes(this.IDCHOFER, this.NOMBRES, this.APPATERNO, this.APMATERNO, this.DOCIDENTIDAD, this.FECHANAC, this.CELULAR, this.FECHACONTRATO, this.NUMBREVETE, this.CCI)
      .subscribe(res =>{
        this.NOMBRES= "";
        this.APPATERNO = "";
        this.APMATERNO= "";
        this.DOCIDENTIDAD= 0;
        this.FECHANAC= "";
        this.CELULAR= "";
        this.FECHACONTRATO = "";
        this.NUMBREVETE = "";
        this.CCI = "";


      });
    }
  
    deSubmit(IDCHOFER:number){
      this.confirmationService.confirm({
        key: 'confirmar',
        message: '¿Seguro que desea eliminar?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Si',
        rejectLabel: 'No',
        accept: () => {
          this.conexion.deChoferes(IDCHOFER).subscribe((data)=>{
            this.conexion.GetChoferes().subscribe(res =>{
              this.choferes1 = res;
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
