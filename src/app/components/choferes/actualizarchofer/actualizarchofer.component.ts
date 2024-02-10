import { Component, Input, OnInit } from '@angular/core';
import { ChoferInterface } from 'src/app/models/chofer';
import { MenuItem } from 'primeng/api';
import { ChoferService } from 'src/app/sercives/chofer.service';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-actualizarchofer',
  templateUrl: './actualizarchofer.component.html',
  styleUrls: ['./actualizarchofer.component.scss']
})
export class ActualizarchoferComponent implements OnInit {
  items: MenuItem[]=[];
  loading = [false, false, false, false];

  @Input() idchofer: number=0;
  @Input() nombres: string='';
  @Input() appaterno: string='';
  @Input() apmaterno: string='';
  @Input() docidentidad: number=0;
  @Input() fechanac: string = '';
  @Input() celular: string = '';
  @Input() fechacontrato: string = '';
  @Input() numbrevete: string = '';
  @Input() cci: string = '';


  cad: string[] = [];

  choferaux: any;
  NOMBRES: string = "";
  APPATERNO: string = "";
  APMATERNO:string='';
  DOCIDENTIDAD: number = 0;
  FECHANAC: string = "";
  CELULAR: string = "";
  FECHACONTRATO: string = "";
  NUMBREVETE: string = "";
  CCI: string = "";

  constructor(private conexionService:ConexionService, 
              private choferService:ChoferService
              ) { }

  ngOnInit(): void
  {
    this.NOMBRES = this.nombres;
    this.APPATERNO = this.appaterno;
    this.APMATERNO = this.apmaterno;
    this.DOCIDENTIDAD = this.docidentidad;
    this.FECHANAC = this.fechanac;
    this.CELULAR = this.celular;
    this.FECHACONTRATO = this.fechacontrato;
    this.NUMBREVETE = this.numbrevete;
    this.CCI = this.cci;
  }

  cancelar(){
    this.NOMBRES = this.nombres;
    this.APPATERNO = this.appaterno;
    this.APMATERNO = this.apmaterno;
    this.DOCIDENTIDAD = this.docidentidad;
    this.FECHANAC = this.fechanac;
    this.CELULAR = this.celular;
    this.FECHACONTRATO = this.fechacontrato;
    this.NUMBREVETE = this.numbrevete;
    this.CCI = this.cci;
  }
  
  onSubmit(){
      this.conexionService.upChoferes(this.idchofer, this.NOMBRES, this.APPATERNO, this.APMATERNO, this.DOCIDENTIDAD, this.FECHANAC, this.CELULAR, this.FECHACONTRATO, this.NUMBREVETE, this.CCI)
      .subscribe((res) => {})
  }

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }
}
