import { Component, OnInit } from '@angular/core';
import { ItinerarioInterface } from 'src/app/models/itinerario';
import { ItinerarioService } from 'src/app/sercives/itinerario.service';
import { MenuItem } from 'primeng/api';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-itinerario',
  templateUrl: './registrar-itinerario.component.html',
  styleUrls: ['./registrar-itinerario.component.scss']
})
export class RegistrarItinerarioComponent implements OnInit {

  items: MenuItem[]=[];
  loading = [false, false, false, false];

    itinerariosaux: any;
    IDUNIDAD:	number=0;
    ORIGEN:	 string="";
    DESTINO:	string="";
    TIEMPOESTIMADO:	string = "";
    FECHAVIAJE:	string="";
    HORASALIDA:	string="";
    PRECIO:	number=0;
    Itinerarios: ItinerarioInterface[] =[];
  constructor(private conexionService:ConexionService, private ItinerarioService:ItinerarioService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog' }
  ];
  this.conexionService.GetItinerarios().subscribe((res)=>{
    console.log(res);
  })
  }

  cancelar(){
    this.IDUNIDAD = 0;
    this.ORIGEN = "";
    this.DESTINO= "";
    this.TIEMPOESTIMADO= "";
    this.FECHAVIAJE='';
    this.HORASALIDA="";
    this.PRECIO=0;

  }

  onSubmit(){
    //Revisar p-p
    this.conexionService.addItinerarios(this.IDUNIDAD,this.ORIGEN,this.DESTINO,this.TIEMPOESTIMADO,this.FECHAVIAJE,this.HORASALIDA, this.PRECIO)
    .subscribe((res)=>{
      this.IDUNIDAD = 0;
      this.ORIGEN = "";
      this.DESTINO= "";
      this.TIEMPOESTIMADO= "";
      this.FECHAVIAJE='';
      this.HORASALIDA="";
      this.PRECIO=0;
    })
  
}
load(index: number) {
  this.loading[index] = true;
  setTimeout(() => this.loading[index] = false, 1000);
}

}
