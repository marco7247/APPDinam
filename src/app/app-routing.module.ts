import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccionesComponent } from './acciones/acciones.component';
import { SesionComponent } from './sesion/sesion.component';
import { PostulacionComponent } from './postulacion/postulacion.component'
import { VotacionComponent } from './votacion/votacion.component';

const routes: Routes = [
  {
    path: "",
    component: AccionesComponent 
  },
  {
    path: 'siguiente',
    component: VotacionComponent
  },
  {
    path: "votacion",
    component: VotacionComponent 
  },
  {
    path: "",
    component: SesionComponent,
    outlet: "sesion"
  },
  {
    path: "siguiente",
    component: PostulacionComponent,
    outlet: "sesion"
  },
  {
    path: "votacion",
    component: VotacionComponent,
    outlet: "sesion"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
