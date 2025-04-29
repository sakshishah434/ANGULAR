import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { HideshowDirective } from './hideshow.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdataService } from './userdata.service';
import { TdfComponent } from './tdf/tdf.component';




@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HideshowDirective,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    TdfComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    
  ],
  providers: [
    
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
