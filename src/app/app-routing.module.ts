import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'contact', component: ContactComponent},
  {path:'product/:id/:name/:price/:image', component: ProductsDetailComponent, pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
