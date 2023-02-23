import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Produit';
import {ProduitService} from 'src/app/produit.service'


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit{
 
  
  url: string = "http://localhost:8080/";

  produit?: Produit 
  data: any


  constructor(private service: ProduitService, private route: ActivatedRoute, private router : Router) { }


  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getProduitById(id).subscribe(data => {
      this.produit = data
      console.log(this.produit)
    })
  }

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    qte: new FormControl('', [Validators.required]),
    disponible: new FormControl('', [Validators.required]),

  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateProduit(this.produit?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
