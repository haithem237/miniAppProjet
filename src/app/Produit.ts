export interface Produit {
    id    : number
    nom  : string
    qte   : number
    disponible : boolean
    c     : Date 
    dateDeModification : Date
    id_categorie:number  

    searchId: number;
}