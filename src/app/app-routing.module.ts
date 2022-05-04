import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  //Si no se encuentra la ruta, se redirige a la ruta por defecto
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
