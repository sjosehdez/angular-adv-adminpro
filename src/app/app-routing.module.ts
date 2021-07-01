import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule} from './pages/pages.routing' // se agrega para poder tener acceso a las rutas hijas
import { AuthRoutingModule} from './auth/auth.routing' // se agrega para poder tener acceso a las rutas hijas

//Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  //Path: '/dashboard' PagesRouting
  //Path: '/auth' AuthRouting  
  //Rutas protegidas
  //Rutas publicas 
  //Rutas de control
  { path: '**', component: NopagefoundComponent },
];


@NgModule(
  {
    imports: [
      RouterModule.forRoot(routes), 
      PagesRoutingModule,
      AuthRoutingModule
    ],
    exports: [RouterModule]
  }
)
export class AppRoutingModule { }