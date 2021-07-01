//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

//Componentes
import { AppComponent } from './app.component';
import { NopagefoundComponent} from './nopagefound/nopagefound.component'

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  //si tiene la palabra modulos van en los imports 
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


