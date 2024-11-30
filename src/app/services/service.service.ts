import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capex } from '../models/capex';
import { User } from '../models/user';
import { Opex } from '../models/opex';
import { Bondecommande } from '../models/bondecommande';
import { Bondecommandeo } from '../models/bondecommandeo';
import { Factures } from '../models/facture';
import { Factureso } from '../models/factureo';
import { Utilisateurs } from '../models/utilisateurs';
import { Projects } from '../models/projects';
import { Projets } from '../models/projets';
import { Credentials } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  URL=" http://localhost:3000/"


  constructor( private http:HttpClient) { }
  
  
  getUsers():Observable<User>
  {
    return this.http.get<User>(this.URL+"accounts")
  }
  getCapex():Observable<Capex[]>
  {
    return this.http.get<Capex[]>(this.URL+"capex/getAll")
  }

createCapex(capex:Capex)
{
  return this.http.post(this.URL+"capex/addCapex", capex);
}
getOpex():Observable<Opex[]>
{
  return this.http.get<Opex[]>(this.URL+"opex/getAll")
}

createOpex(opex:Opex)
{
return this.http.post(this.URL+"opex/addOpex", opex);
}
deleteOpex(id:number){
  return this.http.delete(this.URL+"opex/deleteOpex/"+id)
}
deleteCapex(id:number){
  return this.http.delete(this.URL+"capex/deleteCapex/"+id)
}
getOpexByid(id:number):Observable<Opex>{
  return this.http.get<Opex>(this.URL+"opex/getOne/"+id)
}
update(id:number,opex:Opex){
  return this.http.put(this.URL+"opex/updateOpex/"+id,opex)

}
getCapexByid(id:number):Observable<Capex>{
  return this.http.get<Capex>(this.URL+"capex/getOne/"+id)
}
updatee(id:number,capex:Capex):Observable<any>{
  return this.http.put(this.URL+"capex/updateCapex/"+id,capex)

}
getBondecommande():Observable<Bondecommande[]>
  {
    return this.http.get<Bondecommande[]>(this.URL+"bondecommande/getAll")
  }
  createBondecommande(bondecommande:Bondecommande)
{
  return this.http.post(this.URL+"bondecommande/addBondeComande", bondecommande)
}
deleteBondecommande(id:number){
  return this.http.delete(this.URL+"bondecommande/deleteBondeCommande/"+id)
}
getBondecommandeByid(id:number):Observable<Bondecommande>{
  return this.http.get<Bondecommande>(this.URL+"bondecommande/getOne/"+id)
}
updateee(id:number,bondecommande:Bondecommande){
  return this.http.put(this.URL+"bondecommande/updateBondeCommande/"+id,bondecommande)

}
getBondecommandeo():Observable<Bondecommandeo[]>
  {
    return this.http.get<Bondecommandeo[]>(this.URL+"bondecommandeo/getAll")
  }
  createBondecommandeo(bondecommandeo:Bondecommandeo)
{
  return this.http.post(this.URL+"bondecommandeo/addBondeComandeo", bondecommandeo)
}
deleteBondecommandeo(id:number){
  return this.http.delete(this.URL+"bondecommandeo/deleteBondeCommandeo/"+id)
}
getBondecommandeoByid(id:number):Observable<Bondecommandeo>{
  return this.http.get<Bondecommandeo>(this.URL+"bondecommandeo/getOne/"+id)
}
updateeee(id:number,bondecommandeo:Bondecommandeo){
  return this.http.put(this.URL+"bondecommandeo/updateBondeCommandeo/"+id,bondecommandeo)

}

getFactures():Observable<Factures[]>
  {
    return this.http.get<Factures[]>(this.URL+"factures/getAll")
  }
  createFactures(factures:Factures)
{
  return this.http.post(this.URL+"factures/addFactures", factures)
}
deleteFactures(id:number){
  return this.http.delete(this.URL+"factures/deleteFactures/"+id)
}
getFacturesByid(id:number):Observable<Factures>{
  return this.http.get<Factures>(this.URL+"factures/getOne/"+id)
}
updateFact(id:number,factures:Factures){
  return this.http.put(this.URL+"factures/updateFactures/"+id,factures)

}
getFactureso():Observable<Factureso[]>
  {
    return this.http.get<Factureso[]>(this.URL+"factureso/getAll")
  }
  createFactureso(factureso:Factureso)
{
  return this.http.post(this.URL+"factureso/addFactureso", factureso)
}
deleteFactureso(id:number){
  return this.http.delete(this.URL+"factureso/deleteFactureso/"+id)
}
getFacturesoByid(id:number):Observable<Factureso>{
  return this.http.get<Factures>(this.URL+"factureso/getOne/"+id)
}
updateFacto(id:number,factureso:Factureso){
  return this.http.put(this.URL+"factureso/updateFactureso/"+id,factureso)

}








createUtilisateur(utilisateurs:Utilisateurs)
{
return this.http.post(this.URL+"utilisateurs/addUtilisateur", utilisateurs);
}

deleteUtilisateur(id:number){
return this.http.delete(this.URL+"utilisateurs/deleteUtilisateur/"+id)
}

updateUtil(id:number,utilisateurs:Utilisateurs){
return this.http.put(this.URL+"utilisateurs/updateUtilisateur/"+id,utilisateurs)

}
getUtilisateurByid(id:number):Observable<Utilisateurs>{
return this.http.get<Utilisateurs>(this.URL+"utilisateurs/getUtilisateur/"+id)
}



getUtilisateur():Observable<Utilisateurs[]>
{
  return this.http.get<Utilisateurs[]>(this.URL+"utilisateurs/getAll")
}




createProjects(projects:Projects)
{
return this.http.post(this.URL+"projects/addProjects", projects);
}



createProjets(projets:Projets)
{
return this.http.post(this.URL+"projets/addProjets", projets);
}



deleteProjects(id:number){
return this.http.delete(this.URL+"projects/deleteProjects/"+id)
}

updateProjects(id:number,projects:Projects){
return this.http.put(this.URL+"projects/updateProjects/"+id,projects)

}
getProjectsByid(id:number):Observable<Projects>{
return this.http.get<Projects>(this.URL+"projects/getUtilisateur/"+id)
}
getProjectsBybande(id:number):Observable<Projects>{
  return this.http.get<Projects>(this.URL+"projects/getOne/parbande/"+id)
  }

  getProjetsBybande(id:number):Observable<Projets>{
    return this.http.get<Projets>(this.URL+"projets/getOne/parbandeo/"+id)
    }


  getProjectsByFact(id:number):Observable<Projects>{
    return this.http.get<Projects>(this.URL+"projects/getOne/parFact/"+id)
    }
    getProjetsByFact(id:number):Observable<Projets>{
      return this.http.get<Projets>(this.URL+"projets/getOne/parFact/"+id)
      }


getProjects():Observable<Projects[]>
{
  return this.http.get<Projects[]>(this.URL+"projects/getAll")
}


getProjets():Observable<Projets[]>
{
  return this.http.get<Projets[]>(this.URL+"projets/getAll")
}
updateProjectsbyCapex(id:number,projects:Projects){
  return this.http.put(this.URL+"projects/updateProjects/parCapex/"+id,projects)
  
  }
  updateProjetsbyOpex(id:number,projets:Projets){
    return this.http.put(this.URL+"projets/updateProjets/parOpex/"+id,projets)
    
    }
    updateProjectsbyBande(id:number,projects:Projects){
      return this.http.put(this.URL+"projects/updateProjects/parBonde/"+id,projects)
      
      } 
      updateProjectsbyFact(id:number,projects:Projects){
        return this.http.put(this.URL+"projects/updateProjects/parFact/"+id,projects)
        
        } 
  

    
    deleteProjectsByCapex(idCapex:number){
      return this.http.delete(this.URL+"projects/deleteProjects/parCapex/"+idCapex)
      }
      deleteProjectsByOpex(idOpex:number){
        return this.http.delete(this.URL+"projets/deleteProjets/parOpex/"+idOpex)
        }
  
      deleteBandeByCapex(idCapex:number){
        return this.http.delete(this.URL+"bondecommande/deleteBondeCommande/Capex/"+idCapex)
        }
        deleteBandeByOpex(idOpex:number){
          return this.http.delete(this.URL+"bondeCommandeo/deleteBondeCommande/Opex/"+idOpex)
          }


        deleteFactByCapex(idCapex:number){
          return this.http.delete(this.URL+"factures/deleteFactures/capex/"+idCapex)
          }
          
        deleteFactByOpex(idOpex:number){
          return this.http.delete(this.URL+"factureso/deleteFactureso/opex/"+idOpex)
          }

          deleteFactByBonde(idBondecommade:number){
            return this.http.delete(this.URL+"factures/deleteFactures/bonde/"+idBondecommade)
            }

            deleteFactByBondeo(idBondecommadeo:number){
              return this.http.delete(this.URL+"factureso/deleteFactureso/bonde/"+idBondecommadeo)
              }

      deleteProjectsByBonde(idBondecommade:number){
        return this.http.delete(this.URL+"projects/deleteProjects/parBonde/"+idBondecommade)
        }

        deleteProjetsByBonde(idBondecommadeo:number){
          return this.http.delete(this.URL+"projets/deleteProjets/parBondeo/"+idBondecommadeo)
          }



        deleteProjectsByFact(idFactures:number){
          return this.http.delete(this.URL+"projects/deleteProjects/parFact/"+idFactures)
          }
    
          deleteProjetsByFact(idFactureso:number){
            return this.http.delete(this.URL+"projets/deleteProjets/parFact/"+idFactureso)
            }
      



      getBondecommandeByidCapex(idCapex:number):Observable<Bondecommandeo>{
        return this.http.get<Bondecommande>(this.URL+"bondecommande/getOne/parCapex/"+idCapex)
      }

      getBondecommandeByidOpex(idOpex:number):Observable<Bondecommandeo>{
        return this.http.get<Bondecommandeo>(this.URL+"bondecommandeo/getOne/parOpex/"+idOpex)
      }


     
login(c:Credentials):Observable<Credentials>
{
return this.http.post<Credentials>(this.URL+"utilisateurs/logUtilisateur",c);
}


}
