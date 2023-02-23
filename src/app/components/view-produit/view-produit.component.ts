import { Component,OnInit   } from '@angular/core';
import { Router } from '@angular/router';
import {ProduitService} from 'src/app/produit.service'
import { ngxCsv } from 'ngx-csv';
import jsPDF from 'jspdf';
import autoTable from 'jsPDF-autoTable';
import { Produit } from 'src/app/Produit';


@Component({
  selector: 'app-view-produit',
  templateUrl: './view-produit.component.html',
  styleUrls: ['./view-produit.component.css']
})
export class ViewProduitComponent implements OnInit {


  produits: any[] | undefined
  url: string = "http://localhost:8080/produit";

  constructor(private service: ProduitService, private router: Router) { 
   
  } 

  ngOnInit(): void {
    this.service.getProduits().subscribe(data => {
      this.produits = data;
      console.log(this.produits);
    })
  }

 

  deleteProduit(id: number){
    this.service.deleteProduit(id).subscribe(data => {
      this.produits = this.produits?.filter(produit => produit.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateProduit(id: number){
    this.router.navigate(['updateProduit', id]);
  }


  downlodCsvFil(){
   
    new ngxCsv(this.produits, 'Produits');
    }   


    downloadPDF(){

  const doc = new jsPDF('p','pt');

  autoTable(doc, {

    body: this.produits,
    didDrawPage: (dataArg) => {
     doc.text('produits', dataArg.settings.margin.left, 10);
    }  
});  
  doc.save('produits.pdf');

}


getProduitById(id: number){
  this.service.getProduitById(id).subscribe(data => {
    this.produits = this.produits?.filter(produit => produit.id === id);
  }) 
  
    setTimeout(()=>{
      window.location.reload();
    }, 100);

}




}
