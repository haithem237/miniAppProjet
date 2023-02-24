import { Component,OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ProduitService} from 'src/app/produit.service'



@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  private url="http://localhost:8080/produit/";

  constructor(private service: ProduitService, private router: Router) { }
  data: any;
  id:any;

     
  form = new FormGroup({ 
    id_categorie: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    qte: new FormControl('', [Validators.required]),
    disponible: new FormControl('', [Validators.required]),
   


 
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    this.id=this.data.id_categorie
    console.log(this.data)

    this.service.addProduit(this.id, this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }


}
