import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,    
  ],
  imports: [CommonModule ],
  exports:[
    CommonModule,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,    
  ]
})
export class SharedModule { }

