import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/materials/material.module';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { CategoryComponent } from './shared/category/category.component';
import { ProductsComponent } from './shared/products/products.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsouselComponent } from './carsousel/carsousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    HomeComponent,
    ToolbarComponent,
    CategoryComponent,
    ProductsComponent,
    SupplierComponent,
    PageNotFoundComponent,
    CarsouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
