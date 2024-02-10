import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/sercives/cliente.service';
import { MenuItem } from 'primeng/api';
import { ConexionService } from 'src/app/sercives/conexion.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes-reg',
  templateUrl: './clientes-reg.component.html',
  styleUrls: ['./clientes-reg.component.scss']
})
export class ClientesRegComponent implements OnInit {

  items: MenuItem[]=[];
  loading = [false, false, false, false];

  clientesaux: any;
  NOMBRES: string = "";
  APPATERNO: string = "";
  APMATERNO:string="";
  DOCIDENTIDAD: number = 0;
  CORREO: string="";
  CELULAR: number= 0;
  Clientes: ClienteInterface[] =[];


  constructor(private conexionService:ConexionService, private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog' }
  ];
  this.conexionService.GetClientes().subscribe((res)=>{
    console.log(res);
  })
  }

  cancelar(){
    this.NOMBRES = "";
    this.APPATERNO = "";
    this.APMATERNO= "";
    this.DOCIDENTIDAD= 0;
    this.CORREO='';
    this.CELULAR=0;
  }
  onSubmit(){
      //Revisar p-p
      this.conexionService.addClientes(this.NOMBRES,this.APPATERNO,this.APMATERNO,this.DOCIDENTIDAD,this.CORREO,this.CELULAR)
      .subscribe((res)=>{
        this.NOMBRES = "";
        this.APPATERNO = "";
        this.APMATERNO= "";
        this.DOCIDENTIDAD= 0;
        this.CORREO='';
        this.CELULAR=0;
      })
    
  }

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

}
