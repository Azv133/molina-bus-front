import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Registros',
                items: [
                    { label: 'Buses', icon: 'pi pi-fw pi-home', routerLink: ['/buses'] },
                    { label: 'Choferes', icon: 'pi pi-fw pi-id-card', routerLink: ['/choferes'] },
                    { label: 'Flota', icon: 'pi pi-fw pi-bookmark', routerLink: ['/flota'] },
                    { label: 'Itinerario', icon: 'pi pi-fw pi-box', routerLink: ['/itinerario'] },
                    { label: 'Clientes', icon: 'pi pi-fw pi-users', routerLink: ['/clientes'] }
                ]
            },
            {
                label: 'Estadísticas',
                items: [
                    { label: 'Gráficos', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/graficos'] },
                    { label: 'Multas', icon: 'pi pi-fw pi-file-excel', routerLink: ['/multas'] }
                ]
            },
            {
                label: 'Administrador',
                items: [
                    { label: 'Perfil', icon: 'pi pi-fw pi-table', routerLink: ['/perfil'] },
                    { label: 'Bandeja de entrada', icon: 'pi pi-fw pi-list', routerLink: ['/bandeja-de-entrada'] }
                ]
            }
        ];
    }
}
