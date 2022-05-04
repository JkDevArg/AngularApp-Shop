import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouPageComponent } from './thank-you-page.component';
import { ProductsModule } from '../../products/products.module';

const routes: Routes = [{ path: '', component: ThankYouPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThankYouPageRoutingModule { }
