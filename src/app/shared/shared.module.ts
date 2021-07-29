import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modulos
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,    
  ],
  imports: [CommonModule, 
      RouterModule //Se agrego para poder ver las rutas y poder hacer link
  ],
  exports:[
    CommonModule,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,    
  ]
})
export class SharedModule { }

