import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component'; 

//Rutas hijas
const routes: Routes = [
    {
        //Path vacio
        //path: '', component: PagesComponent ,     
        path: 'dashboard', component: PagesComponent ,  //Se agrego dashboard para poder abrir ejemplo: dashboard/progress
        children: [
            //{ path: 'dashboard', component: DashboardComponent },
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Grafica1Component },
            //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
