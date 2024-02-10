import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ConexionService } from './sercives/conexion.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, private conexion: ConexionService) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
