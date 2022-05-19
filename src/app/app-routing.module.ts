import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path:'home',component: HomeComponent
  },
  {
    path:'productos',component: ProductosComponent
  },
  {
    path:'formulario',component: FormularioComponent
  },
  {
    path:'contacto',component: ContactosComponent
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
