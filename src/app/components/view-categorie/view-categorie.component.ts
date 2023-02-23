import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ngxCsv } from 'ngx-csv';
import jsPDF from 'jspdf';
import autoTable from 'jsPDF-autoTable';



@Component({
  selector: 'app-view-categorie',
  templateUrl: './view-categorie.component.html',
  styleUrls: ['./view-categorie.component.css']
})
export class ViewCategorieComponent implements OnInit{


  categories: any[] | undefined
  url: string = "http://localhost:8080/categorie/getAllCategorie";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(data => {
      this.categories = data; 
      
    })   
  }


  deleteCategorie(id: number){
    this.service.deleteCategorie(id).subscribe(data => {
      this.categories = this.categories?.filter(categorie => categorie.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateCategorie(id: number){
    this.router.navigate(['update', id]);
  }


  
  downlodCsvFil(){
   
    new ngxCsv(this.categories, 'Categories');
    }   


    downloadPDF(){

  const doc = new jsPDF('p','pt');

  autoTable(doc, {

    body: this.categories,
    didDrawPage: (dataArg) => {
     doc.text('Categories', dataArg.settings.margin.left, 10);
    }  
});  
  doc.save('categories.pdf');

}


}
