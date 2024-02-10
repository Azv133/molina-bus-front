import { ArrayType } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { last, lastValueFrom, Subscription, zip } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ConexionService } from 'src/app/sercives/conexion.service';


@Component({
  selector: 'app-buses-graf',
  templateUrl: './buses-graf.component.html',
  styleUrls: ['./buses-graf.component.scss']
})
export class BusesGrafComponent implements OnInit {
  buses: any;
  
  lineData: any;

  barData: any;

  pieData: any;

  polarData: any;

  radarData: any;

  lineOptions: any;

  barOptions: any;

  pieOptions: any;

  polarOptions: any;

  radarOptions: any;

  subscription: Subscription;

  //Grafico de estados
  activos: number =0;
  enObs: number = 0;

  //Gráfico de marcas
  cantHyundai: number=0;
  catVolkswagen: number=0;
  cantMitsubichi: number=0;
  cantJac: number=0;
  cantMercedes: number=0;
  cantHigher: number=0;

  //Gráfico de fechas
  cEnero:number=0;
  cFebrero:number=0;
  cMarzo:number=0;
  cAbril:number=0;
  cMayo:number=0;
  cJunio:number=0;
  cJulio:number=0;
  cAgosto:number=0;
  cSetiembre:number=0;
  cOctubre:number=0;
  cNoviembre:number=0;
  cDiciembre:number=0;
  
    constructor(public layoutService: LayoutService, private conexion:ConexionService) {
    this.subscription = this.layoutService.configUpdate$.subscribe(config => {
      this.initCharts();
    });
   }

   ngOnInit(): void {
    this.conexion.GetBuses().subscribe(res => {

      this.buses = res;
      this.activos = this.buses.filter((x: { ESTADO: string; }) => x.ESTADO == 'ACTIVO').length;
      this.enObs = this.buses.filter((x: { ESTADO: string; }) => x.ESTADO != 'ACTIVO').length;

      this.cantHyundai = this.buses.filter((x: { MARCA: string; }) => x.MARCA == 'HYUNDAI').length;
      this.catVolkswagen = this.buses.filter((x: { MARCA: string; }) => x.MARCA == 'VOLKSWAGEN').length;
      this.cantMitsubichi = this.buses.filter((x: { MARCA: string; }) => x.MARCA == 'MITSUBISHI').length;
      this.cantJac = this.buses.filter((x: { MARCA: string; }) => x.MARCA == 'JAC').length;
      this.cantMercedes = this.buses.filter((x: { MARCA: string; }) => x.MARCA == 'MERCEDES BENZ').length;
      this.cantHigher = this.buses.filter((x: { MARCA: string; }) => x.MARCA == 'HIGHER').length;

      this.cEnero = this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '01').length;
      this.cFebrero= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '02').length;
      this.cMarzo= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '03').length;
      this.cAbril= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '04').length;
      this.cMayo= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '05').length;
      this.cJunio= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '06').length;
      this.cJulio= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '07').length;
      this.cAgosto= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '08').length;
      this.cSetiembre= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '09').length;
      this.cOctubre= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '10').length;
      this.cNoviembre= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '11').length;
      this.cDiciembre= this.buses.filter((x: { FECHACOMPRA: string; }) => x.FECHACOMPRA.split('-')[1] == '12').length;

      this.initCharts();
    });
  }

  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.pieData = {
        labels: ['ACTIVO', 'EN OBSERVACIÓN'],
        datasets: [
            {
                data: [this.activos, this.enObs],
                backgroundColor: [
                    documentStyle.getPropertyValue('--indigo-500'),
                    documentStyle.getPropertyValue('--purple-500')
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--indigo-400'),
                    documentStyle.getPropertyValue('--purple-400')
                ]
            }]
    };

    this.pieOptions = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };

    this.lineData = {
      labels: ['HYUNDAI', 'VOLKSWAGEN', 'MITSUBISHI', 'JAC', 'MERCEDES BENZ', 'HIGHER'],
      datasets: [
          {
              label: 'Cantidad de buses',
              data: [this.cantHyundai, this.catVolkswagen, this.cantMitsubichi, this.cantJac, this.cantMercedes, this.cantHigher],
              fill: false,
              backgroundColor: documentStyle.getPropertyValue('--primary-500'),
              borderColor: documentStyle.getPropertyValue('--primary-500'),
              tension: .4
          }
      ]
    };

    this.lineOptions = {
        plugins: {
            legend: {
                labels: {
                    fontColor: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
        }
    };

    this.barData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'],
      datasets: [
          {
              label: 'Cantidad de buses',
              backgroundColor: documentStyle.getPropertyValue('--primary-500'),
              borderColor: documentStyle.getPropertyValue('--primary-500'),
                data: [this.cEnero, this.cFebrero, this.cMarzo, this.cAbril, this.cMayo, this.cJunio, this.cJulio, this.cAgosto, this.cSetiembre, this.cOctubre, this.cNoviembre, this.cDiciembre]
          }
      ]
    };

    this.barOptions = {
        plugins: {
            legend: {
                labels: {
                    fontColor: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
        }
    };
  }

  
}
