import { Component, AfterViewInit, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import * as c3 from 'c3';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import * as shape from 'd3-shape';
import * as d3 from 'd3';
import { single } from './data';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import { DashboardService } from '../service/dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { UserWallet } from '_modals/userWallet';
import { Router } from '@angular/router';
import { ThemeService } from 'ng2-charts';

// declare var require: any;

// const data: any = require('./data.json');

// export interface Chart {
//     type: ChartType;
//     data: Chartist.IChartistData;
//     options?: any;
//     responsiveOptions?: any;
//     events?: ChartEvent;
// }

@Component({
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements AfterViewInit, OnInit {

    public vendorList: UserWallet[];
    public affiliateList: UserWallet[];
    public returnList: any[];
    public orderList: any[];
    public saleList: any[];

    // public config: PerfectScrollbarConfigInterface = {};

    // single: any[];
    // dateData: any[];
    // dateDataWithRange: any[];
    // range = false;
    // //options
    // showXAxis = true;
    // showYAxis = true;
    // gradient = false;
    // showLegend = false;
    // showXAxisLabel = true;
    // tooltipDisabled = false;
    // xAxisLabel = 'Region';
    // showYAxisLabel = true;
    // yAxisLabel = 'Sales';
    // showGridLines = true;
    // innerPadding = 0;
    // autoScale = true;
    // timeline = false;
    // barPadding = 5;
    // groupPadding = 0;
    // roundDomains = false;
    // maxRadius = 10;
    // minRadius = 3;
    // view = '';
    // showLabels = true;
    // explodeSlices = false;
    // doughnut = false;
    // arcWidth = 0.25;
    // rangeFillOpacity = 0.15;

    // colorScheme = {
    //     domain: ['#4fc3f7', '#fb8c00', '#7460ee', '#fa5838', '#5ac146', '#137eff']
    // };
    // schemeType = 'ordinal';

    constructor(private dashboardService: DashboardService,
        private router: Router,
        private toastr: ToastrService) {
    //     Object.assign(this, {
    //         single
    //     });
    }

    //// bar chart
    // public barChartData: Array<any> = [
    //     { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3, 0.5, 1.2, 1.0, 0.4, 0.9], label: 'Cost' }
    // ];
    // public barChartLabels: Array<any> = [
    //     '1',
    //     '2',
    //     '3',
    //     '4',
    //     '5',
    //     '6',
    //     '7',
    //     '8',
    //     '9',
    //     '10',
    //     '11',
    //     '12'
    // ];
    // public barChartOptions: any = {
    //     maintainAspectRatio: false,
    //     legend: {
    //         display: false
    //     },
    //     tooltips: {
    //         enabled: false
    //     },
    //     scales: {
    //         xAxes: [{
    //             display: false,
    //             barPercentage: 0.2,
    //             categoryPercentage: 0.5
    //         }],
    //         yAxes: [{
    //             display: false
    //         }]
    //     }
    // };
    // public barChartColors: Array<any> = [
    //     {
    //         backgroundColor: '#2962ff',
    //         hoverBackgroundColor: '#2962ff',
    //         hoverBorderWidth: 2,
    //         hoverBorderColor: '#2962ff'
    //     }
    // ];
    // public barChartLegend = false;
    // public barChartType = 'bar';

    // lineChart: Chart = {
    //     type: 'Line',
    //     data: data['Line'],
    //     options: {
    //         low: 0,
    //         high: 48,
    //         showArea: true,
    //         fullWidth: true,
    //         height: 270,
    //         axisY: {
    //             onlyInteger: true,
    //             scaleMinSpace: 40,
    //             offset: 20,
    //             labelInterpolationFnc: function (value) {
    //                 return (value / 10) + 'k';
    //             }
    //         }
    //     }
    // };

    ngAfterViewInit() {
        //// ============================================================== 
        //// campaign
        //// ============================================================== 
        // const chart1 = c3.generate({
        //     bindto: '#campaign',
        //     data: {
        //         columns: [
        //             ['Un-opened', 35],
        //             ['Clicked', 15],
        //             ['Open', 10],
        //             ['Bounced', 18],
        //         ],

        //         type: 'donut'
        //     },
        //     donut: {
        //         label: {
        //             show: false
        //         },
        //         width: 15,
        //     },

        //     legend: {
        //         hide: true
        //     },
        //     color: {
        //         pattern: ['#137eff', '#8b5edd', '#5ac146', '#eceff1']
        //     }
        // });

        // //============================================================== 
        // //weather
        // //============================================================== 
//         const chart2 = c3.generate({
//             bindto: '.weather-report',
//             data: {
//                 columns: [
//                     ['Day 1', 21, 15, 30, 45, 15]
//                 ],
//                 type: 'area-spline'
//             },
//             axis: {
//                 y: {
//                     show: false,
//                     tick: {
//                         count: 0,
//                         outer: false
//                     }
//                 },
//                 x: {
//                     show: false,
//                 }
//             },
//             padding: {
//                 top: 0,
//                 right: -8,
//                 bottom: -28,
//                 left: -8,
//             },
//             point: {
//                 r: 2,
//             },
//             legend: {
//                 hide: true
//             },
//             color: {
//                 pattern: ['#5ac146']
//             }

//         });
    }

    ngOnInit() {
        this.getTopVendorList();
        this.getTopAffiliateList();
        this.getLastReturnList();
        this.getLastOrdersList();
        this.getLastSalesList();
    }

    getTopVendorList() {
        let url = 'api/getTop5Users';
        // let url = 'api/getTop5Users/VENDOR';
        this.dashboardService.getTop5Users(url, {userType : 'VENDOR'}).subscribe(
        // this.vendorService.getTop5Users(url).subscribe(
        params => {
            this.vendorList = params.data.topUsers;
            console.log(this.vendorList);
        }, error => {
            console.log(error);
        }
        )
    }

    getTopAffiliateList() {
        let url = 'api/getTop5Users';
        this.dashboardService.getTop5Users(url, {userType : 'AFFILIATE'}).subscribe(
        params => {
            this.affiliateList = params.data.topUsers;
            console.log(this.affiliateList);
        }, error => {
            console.log(error);
        }
        )
    }

    getLastReturnList() {
        let url = 'api/getLastReturns';
        this.dashboardService.getLastReturns(url, {offset: 0}).subscribe(
            params => {
                this.returnList = params.data.returns;
                console.log(this.returnList);
            },error => {
                console.log(error);
            }
        );
    }

    getLastOrdersList() {
        let url = 'api/getLastOrders';
        this.dashboardService.getLastOrders(url, {offset: 0}).subscribe(
            data => {
                this.orderList = data.data.lastOrders;
                console.log(this.orderList);
            }, error => {
                console.log(error);
            }
        )
    }

    getLastSalesList() {
        let url = 'api/getAllOrderByStatus';
        this.dashboardService.getAllOrderByStatus(url, {offset: 0, status: 'COMPLETE'}).subscribe(
            data => {
                this.saleList = data.data.allOrders;
                console.log(this.saleList);
            }, error => {
                console.log(error);
            }
        )
    }

    navigateToProfile(id) {
        // alert(id);
        this.router.navigateByUrl('/vendor/vendorprofile/'+ id);
    }

    navigateToOrderProfile(id) {
        this.router.navigateByUrl('/ecom/orderprofile/'+ id);
    }
}
