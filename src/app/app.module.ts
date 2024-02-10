import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ChoferesMenuComponent } from './components/choferes/choferes-menu/choferes-menu.component';
import { FlotaMenuComponent } from './components/flota/flota-menu/flota-menu.component';
import { ItinerarioMenuComponent } from './components/itinerario/itinerario-menu/itinerario-menu.component';
import { PerfilMenuComponent } from './components/perfil/perfil-menu/perfil-menu.component';
import { BandejaEntradaMenuComponent } from './components/bandejaEntrada/bandeja-entrada-menu/bandeja-entrada-menu.component';
import { BusesMenuComponent } from './components/buses/buses-menu/buses-menu.component';
import { RegbusComponent } from './components/buses/regbus/regbus.component';
import { BusesregComponent } from './components/buses/busesreg/busesreg.component';
import { FormsModule } from '@angular/forms';
import { TableModule, TableRadioButton } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ActualizarbusComponent } from './components/buses/actualizarbus/actualizarbus.component';
import { ChartModule } from 'primeng/chart';
import { BusesGrafComponent } from './components/graficos/buses-graf/buses-graf.component';
import { GraficosMenuComponent } from './components/graficos/graficos-menu/graficos-menu.component';
import { InicioMultasComponent } from './components/graficos/inicio-multas/inicio-multas.component';
import { MultasComponent } from './components/buses/multas/multas.component';
import { ActualizarclienteComponent } from './components/clientes/actualizarcliente/actualizarcliente.component';
import { ClientesMenuComponent } from './components/clientes/clientes-menu/clientes-menu.component';
import { ClientesRegComponent } from './components/clientes/clientes-reg/clientes-reg.component';
import { ClientesTablaComponent } from './components/clientes/clientes-tabla/clientes-tabla.component';
import { ItinerarioTablaComponent } from './components/itinerario/itinerario-tabla/itinerario-tabla.component';
import { ActualizarItinerarioComponent } from './components/itinerario/actualizar-itinerario/actualizar-itinerario.component';
import { RegistrarItinerarioComponent } from './components/itinerario/registrar-itinerario/registrar-itinerario.component';
import { ChoferesTablaComponent } from './components/choferes/choferes-tabla/choferes-tabla.component';
import { ActualizarchoferComponent } from './components/choferes/actualizarchofer/actualizarchofer.component';
import { ChoferesRegComponent } from './components/choferes/choferes-reg/choferes-reg.component';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, ChoferesMenuComponent, FlotaMenuComponent, 
        ItinerarioMenuComponent, PerfilMenuComponent, BandejaEntradaMenuComponent, 
        BusesMenuComponent, RegbusComponent, BusesregComponent, ActualizarbusComponent, 
        BusesGrafComponent, GraficosMenuComponent, InicioMultasComponent, MultasComponent,
        ActualizarclienteComponent, ClientesMenuComponent, ClientesRegComponent, ClientesTablaComponent, 
        ItinerarioTablaComponent, ActualizarItinerarioComponent, RegistrarItinerarioComponent, ChoferesTablaComponent, ActualizarchoferComponent, ChoferesRegComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        CommonModule,
        FormsModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        ToggleButtonModule,
        RippleModule,
        MultiSelectModule,
        DropdownModule,
        ProgressBarModule,
        ToastModule,
        SliderModule,
        RatingModule,
        BrowserModule,
        HttpClientModule,
        RadioButtonModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatDialogModule,
        MatButtonModule,
        ConfirmDialogModule,
        OverlayModule,
        OverlayPanelModule,
        ChartModule,
        HttpClientModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
