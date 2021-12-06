import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { ProductoComponent } from './components/producto/producto.component';
import { DetlleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'users', component: SingupComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'productos/:id', component: DetlleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
