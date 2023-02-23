import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from './Categorie';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url="http://localhost:8080/categorie";
   

  constructor(private http: HttpClient) { }


  // Add Categorie - Create 

  addCategorie(categrie : Categorie) {
    return this.http.post<Categorie>(`${this.url}/addCategorie`, categrie)
  }

  // Get Categories - Read 

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.url+'/getAllCategorie')
  }

  // Get Categorie by Id - Read
    
    getCategorieById(id:number) : Observable<Categorie> {
      return this.http.get<Categorie>(`${this.url}/categorie/${id}`)
    }


    // Udpate Categorie 
    updateCategorie(id?:number,categorie?:any) : Observable<any> {
      return this.http.put<any>(`${this.url}/updateCategorie/${id}`,categorie)
    }
 
    // Delete Categorie
    deleteCategorie(id:number): Observable<any> {
      return this.http.delete<any>(`${this.url}/delete/${id}`)
    }


}
