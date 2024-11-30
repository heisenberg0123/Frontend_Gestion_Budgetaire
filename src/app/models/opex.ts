export class Opex {
    constructor(
      public  libelleProjet: String,
          
       public code:number,
         
      
       public rubrique:String,
          
       public libelleArticle:String,
           
         public rubriquePrincipale:String,
            
       
       public sousRubrique:String,
            
       public budgetInitiale:number,
       public totalbudget:number,
           
       public extension:number,
       public diminution:number,
          
      public  codeJira:String,
      public  codecg:String,
       public taxe:number,
      public  devise:String,
       public tauxDevise:number,
       public id?:number

    ){

    }
}