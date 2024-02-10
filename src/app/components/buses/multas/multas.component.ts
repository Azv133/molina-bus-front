import { Component, Input, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/sercives/conexion.service';

@Component({
  selector: 'app-multas',
  templateUrl: './multas.component.html',
  styleUrls: ['./multas.component.scss']
})
export class MultasComponent implements OnInit {
  multas: any;
  multas1:any;
  @Input() placa: string = "";

  constructor(private conexion: ConexionService) { 
    }

  ngOnInit(): void {
    this.multas1 = this.conexion.getMultas().subscribe(res =>{
      this.multas = res;
      this.multas1 = this.multas.filter((x: {placa:string}) => x.placa == this.placa);
    });
  }
}
