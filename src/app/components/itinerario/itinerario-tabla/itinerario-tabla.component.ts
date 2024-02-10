import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService} from 'primeng/api';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ItinerarioService } from 'src/app/sercives/itinerario.service';
import { ItinerarioInterface } from 'src/app/models/itinerario';
import { ActualizarItinerarioComponent } from '../actualizar-itinerario/actualizar-itinerario.component';


@Component({
  selector: 'app-itinerario-tabla',
  templateUrl: './itinerario-tabla.component.html',
  styleUrls: ['./itinerario-tabla.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ItinerarioTablaComponent implements OnInit {

  @ViewChild ("filter") filter!: ElementRef;
  
  itinerarios1: any;

  loading: boolean = true;

  suscription: Subscription = new Subscription();

  //Variables
  IDITINERARIO: number = 0;
  IDUNIDAD: number = 0;
  ORIGEN: string = "";
  DESTINO: string = "";
  TIEMPOESTIMADO: string = "";
  FECHAVIAJE: string = "";
  HORASALIDA: string = "";
  PRECIO: number = 0;


  constructor(private conexion:ConexionService, private confirmationService: ConfirmationService, private messageService: MessageService, private ItinerarioService:ItinerarioService) { }

  ngOnInit(): void {
    this.conexion.GetItinerarios().subscribe(res =>{
      this.itinerarios1 = res;
    })
    this.suscription = this.conexion.refresh$.subscribe(() => {this.conexion.GetItinerarios().subscribe(res =>{
      this.itinerarios1 = res;
    })})
  }

  //OBSERVACIÓN: SOBRE CARGAR LA DATA QUE SE TIENE EN LA TABLA --> PARA LA SELECCIÓN DE LA TABLA
  cargaData( IDITINERARIO: number, IDUNIDAD: number, ORIGEN:string, DESTINO:	string, TIEMPOESTIMADO:	string, FECHAVIAJE:	string, HORASALIDA:	string, PRECIO:	number){
    this.IDITINERARIO = IDITINERARIO;
    this.IDUNIDAD = IDUNIDAD;
    this.ORIGEN = ORIGEN;
    this.DESTINO= DESTINO;
    this.TIEMPOESTIMADO= TIEMPOESTIMADO;
    this.FECHAVIAJE=FECHAVIAJE;
    this.HORASALIDA=HORASALIDA;
    this.PRECIO=PRECIO;
  };

  upSubmit(){
    this.conexion.upItinerarios(this.IDITINERARIO, this.IDUNIDAD, this.ORIGEN, this.DESTINO, this.TIEMPOESTIMADO, this.FECHAVIAJE, this.HORASALIDA, this.PRECIO)
    .subscribe(res =>{

      this.IDITINERARIO= 0;
      this.IDUNIDAD = 0;
      this.ORIGEN= "";
      this.DESTINO= "";
      this.TIEMPOESTIMADO= "";
      this.FECHAVIAJE= "";
      this.HORASALIDA="";
      this.PRECIO= 0;
    });
  }

  deSubmit(IDITINERARIO:number){
    this.confirmationService.confirm({
      key: 'confirmar',
      message: '¿Seguro que desea eliminar?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this.conexion.deItinerarios(IDITINERARIO).subscribe((data)=>{
          this.conexion.GetItinerarios().subscribe(res =>{
            this.itinerarios1 = res;
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
