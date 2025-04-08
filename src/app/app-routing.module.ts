import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [{
  path: 'home', component: HomeComponent
  
},
  {
  path : 'about', component : AboutComponent
  },
  {
    path : 'product/:name', component : ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
