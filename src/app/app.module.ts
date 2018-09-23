import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccionesComponent } from './acciones/acciones.component';
import { SesionComponent } from './sesion/sesion.component';
import { PostulacionComponent } from './postulacion/postulacion.component';
import { VotacionComponent } from './votacion/votacion.component';


@NgModule({
  declarations: [
    AppComponent,
    AccionesComponent,
    SesionComponent,
    PostulacionComponent,
    VotacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
