import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { UpdateCategorieComponent } from './components/update-categorie/update-categorie.component';
import { ViewCategorieComponent } from './components/view-categorie/view-categorie.component';

import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { UpdateProduitComponent } from './components/update-produit/update-produit.component';
import { ViewProduitComponent } from './components/view-produit/view-produit.component';

const routes: Routes = [
  { path: '', component: ViewCategorieComponent },
  { path: 'add', component: AddcategorieComponent },
  { path: 'update/:id', component: UpdateCategorieComponent },

  
  { path: 'viewProduit', component: ViewProduitComponent },
  { path: 'addProduit', component: AddProduitComponent },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
