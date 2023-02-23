import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Categorie } from 'src/app/Categorie';


@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {


  categorie?: Categorie
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getCategorieById(id).subscribe(data => {
      this.categorie = data
      console.log(this.categorie)
    })
  }

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    qte: new FormControl('', [Validators.required]),

  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateCategorie(this.categorie?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
