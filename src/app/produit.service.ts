import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './Produit'


@Injectable({
  providedIn: 'root'
})
export class ProduitService {



  private url="http://localhost:8080/produit";
   

  constructor(private http: HttpClient) { }


  // Add Produit - Create 

  addProduit(id:any, produit : Produit) {
     
    return this.http.post<Produit>(`${this.url}/`+id, produit)
  }  

  // Get Produits - Read 

  getProduits(): Observable<any[]> {        
    return this.http.get<any[]>(this.url+'/getAllProduct')
  }

  // Get Produit by Id - Read
    
    getProduitById(id:number) : Observable<Produit> {
      
      return this.http.get<Produit>(`${this.url}/findProduitById/${id}`)
    }


    // Udpate Produit 
    updateProduit(id?:number,produit?:any) : Observable<any> {
      return this.http.put<any>(`${this.url}/updateProduct/${id}`,produit)
    }

    // Delete Produit
    deleteProduit(id:number): Observable<any> {
      return this.http.delete<any>(`${this.url}/delete/${id}`)
    }




}
