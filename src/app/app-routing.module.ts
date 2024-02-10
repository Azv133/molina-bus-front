import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { BusesMenuComponent } from './components/buses/buses-menu/buses-menu.component';
import { ChoferesMenuComponent } from './components/choferes/choferes-menu/choferes-menu.component';
import { FlotaMenuComponent } from './components/flota/flota-menu/flota-menu.component';
import { ItinerarioMenuComponent } from './components/itinerario/itinerario-menu/itinerario-menu.component';
import { PerfilMenuComponent } from './components/perfil/perfil-menu/perfil-menu.component';
import { BandejaEntradaMenuComponent } from './components/bandejaEntrada/bandeja-entrada-menu/bandeja-entrada-menu.component';
import { GraficosMenuComponent } from './components/graficos/graficos-menu/graficos-menu.component';
import { InicioMultasComponent } from './components/graficos/inicio-multas/inicio-multas.component';
import { ClientesMenuComponent } from './components/clientes/clientes-menu/clientes-menu.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {path: 'buses', component: BusesMenuComponent},
            {path: 'choferes', component: ChoferesMenuComponent},
            {path: 'flota', component: FlotaMenuComponent},
            {path: 'itinerario', component: ItinerarioMenuComponent},
            {path: 'clientes', component: ClientesMenuComponent},
            {path: 'perfil', component: PerfilMenuComponent},
            {path: 'bandeja-de-entrada', component: BandejaEntradaMenuComponent},
            {path: 'graficos', component:GraficosMenuComponent},
            {path: 'multas',component:InicioMultasComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
