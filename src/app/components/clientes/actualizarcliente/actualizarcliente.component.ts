import { Component, Input, OnInit } from '@angular/core';
import { ClienteInterface } from 'src/app/models/cliente';
import { MenuItem } from 'primeng/api';
import { ClienteService } from 'src/app/sercives/cliente.service';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-actualizarcliente',
  templateUrl: './actualizarcliente.component.html',
  styleUrls: ['./actualizarcliente.component.scss']
})
export class ActualizarclienteComponent implements OnInit {

  items: MenuItem[]=[];
  loading = [false, false, false, false];

  @Input() idcliente: number=0;
  @Input() nombres: string='';
  @Input() appaterno: string='';
  @Input() apmaterno: string='';
  @Input() docidentidad: number=0;
  @Input() correo: string = '';
  @Input() celular: number=0;

  cad: string[] = [];

  clienteaux: any;
  NOMBRES: string = "";
  APPATERNO: string = "";
  APMATERNO:string='';
  DOCIDENTIDAD: number = 0;
  CORREO: string='';
  CELULAR: number= 0;

  constructor(private conexionService:ConexionService, 
              private clienteService:ClienteService
              ) { }

  ngOnInit(): void
  {
    this.NOMBRES = this.nombres;
    this.APPATERNO = this.appaterno;
    this.APMATERNO = this.apmaterno;
    this.DOCIDENTIDAD = this.docidentidad;
    this.CORREO = this.correo;
    this.CELULAR = this.celular;
  }

  cancelar(){
    this.NOMBRES = this.nombres;
    this.APPATERNO = this.appaterno;
    this.APMATERNO = this.apmaterno;
    this.DOCIDENTIDAD = this.docidentidad;
    this.CORREO = this.correo;
    this.CELULAR = this.celular;
  }
  
  onSubmit(){
      this.conexionService.upClientes(this.idcliente,this.NOMBRES,this.APPATERNO,this.APMATERNO,this.DOCIDENTIDAD,this.CORREO,this.CELULAR)
      .subscribe((res) => {})
  }

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

}

