import { Component, OnInit } from '@angular/core';
import { ChoferInterface } from 'src/app/models/chofer';
import { ChoferService } from 'src/app/sercives/chofer.service';
import { MenuItem } from 'primeng/api';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-choferes-reg',
  templateUrl: './choferes-reg.component.html',
  styleUrls: ['./choferes-reg.component.scss']
})
export class ChoferesRegComponent implements OnInit {

  items: MenuItem[]=[];
  loading = [false, false, false, false];

  choferesaux: any;
  NOMBRES: string = "";
  APPATERNO: string = "";
  APMATERNO: string = "";
  DOCIDENTIDAD: number = 0;
  FECHANAC: string = "";
  CELULAR: string = "";
  FECHACONTRATO: string ="";
  NUMBREVETE: string = "";
  CCI: string = "";
  Choferes: ChoferInterface[] =[];

  constructor(private conexionService:ConexionService, private choferService:ChoferService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog' }
  ];
  this.conexionService.GetChoferes().subscribe((res)=>{
    console.log(res);
  })
  }

  cancelar(){
    this.NOMBRES = "";
    this.APPATERNO = "";
    this.APMATERNO = "";
    this.DOCIDENTIDAD  = 0;
    this.FECHANAC = "";
    this.CELULAR = "";
    this.FECHACONTRATO = "";
    this.NUMBREVETE = "";
    this.CCI = "";
  }
  onSubmit(){
      //Revisar p-p
      this.conexionService.addChoferes(this.NOMBRES, this.APPATERNO, this.APMATERNO, this.DOCIDENTIDAD, this.FECHANAC, this.CELULAR, this.FECHACONTRATO, this.NUMBREVETE, this.CCI)
      .subscribe((res)=>{
        this.NOMBRES = "";
        this.APPATERNO = "";
        this.APMATERNO = "";
        this.DOCIDENTIDAD  = 0;
        this.FECHANAC = "";
        this.CELULAR = "";
        this.FECHACONTRATO = "";
        this.NUMBREVETE = "";
        this.CCI = "";
      })
    
  }

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

}
