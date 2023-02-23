import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { UpdateProduitComponent } from './components/update-produit/update-produit.component';
import { ViewProduitComponent } from './components/view-produit/view-produit.component';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { UpdateCategorieComponent } from './components/update-categorie/update-categorie.component';
import { ViewCategorieComponent } from './components/view-categorie/view-categorie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    ViewProduitComponent,
    AddcategorieComponent,
    UpdateCategorieComponent,
    ViewCategorieComponent
  ],
  imports: [
     BrowserModule,
     AppRoutingModule, 
     BrowserAnimationsModule,
     HttpClientModule,
     NgbModule,
     ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
