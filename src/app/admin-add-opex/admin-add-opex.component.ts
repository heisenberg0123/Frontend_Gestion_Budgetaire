import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Opex } from '../models/opex';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { Projects } from '../models/projects';
import { Projets } from '../models/projets';

@Component({
  selector: 'app-admin-add-opex',
  templateUrl: './admin-add-opex.component.html',
  styleUrls: ['./admin-add-opex.component.css']
})
export class AdminAddOpexComponent {
  constructor( private router :Router,private link:ServiceService,private _dialogRef:MatDialogRef<AdminAddOpexComponent>,private _coreSevise:CoreService){

  }
  goTohome(){
    this.router.navigate(["/home-admin"])
  }
  goToprojet(){
    this.router.navigate(["/projet-admin"])
  }
  goToajoutcapex(){
    this.router.navigate(["/capex-admin"])
  }
  goTolistecapex(){
    this.router.navigate(["/liste-capex-admin"])
  }
  goToajoutopex(){
    this.router.navigate(["/opex-admin"])
  }
  goTolisteopex(){
    this.router.navigate(["/liste-opex-admin"])
  }
  goToajoututilisateur(){
    this.router.navigate(["/add-utilisateur-admin"])
  }
  goTolisteutilisateur(){
    this.router.navigate(["/liste-utilisateur-admin"])
  }
  goToconsommation(){
    this.router.navigate(["/consommation-admin"])
  }
  goToanalyse(){
    this.router.navigate(["/analyse-admin"])
}
form:FormGroup=new FormGroup({
  libelleProjet:new FormControl(""),
  code:new FormControl(""),
  codecg:new FormControl(""),
  libelleArticle:new FormControl(""),
  rubriquePrincipale:new FormControl(""),
  sousRubrique:new FormControl(""),
  rubrique:new FormControl(""),
  codeJira:new FormControl(""),
  budgetInitiale:new FormControl(""),
  extension:new FormControl(""),
  diminution:new FormControl(""),
  Taxe:new FormControl(""),
  devise:new FormControl(""),
  Taux:new FormControl(""),
  totalbudget:new FormControl(""),
})
get libelleProjet(){
  return this.form.get('libelleProjet')?.value
}
get code(){
  return this.form.get('code')?.value
}
get codecg(){
  return this.form.get('codecg')?.value
}
get libelleArticle(){
  return this.form.get('libelleArticle')?.value
}
get rubriquePrincipale(){
  return this.form.get('rubriquePrincipale')?.value
}
get sousRubrique(){
  return this.form.get('sousRubrique')?.value
}
get rubrique(){
  return this.form.get('rubrique')?.value
}
get codeJira(){
  return this.form.get('codeJira')?.value
}
get realise(){
  return this.form.get('libelleProjet')?.value
}
get forecast(){
  return this.form.get('forecast')?.value
}
get commantaire(){
  return this.form.get('commantaire')?.value
}
get chargeaPayer(){
  return this.form.get('chargeaPayer')?.value
}
get devise(){
  return this.form.get('devise')?.value
}
get totalbudget(){
  return this.form.get('totalbudget')?.value
}

ajouter(){
  let o:Opex=new Opex(this.libelleProjet,this.code,this.rubrique,this.libelleArticle,this.rubriquePrincipale,this.sousRubrique,this.budgetInitiale,this.totalbudget,this.extension,this.diminution,this.codeJira,this.codecg,this.Taxe,this.devise,this.Taux)
  this.link.createOpex(o).subscribe(
    {
next: (val:any) => {
  this._coreSevise.openSnackBar('Opex Ajouter','Terminé')
  this._dialogRef.close(true);
  let k:any=val
  let p:Projets=new Projets("active",k.id)
  this.link.createProjets(p).subscribe((v)=>{
    console.log(v)
  })

}

 }
 
  )
}
get budgetInitiale(){
  return this.form.get('budgetInitiale')?.value
}
get Taux(){
  return this.form.get('Taux')?.value
 
}
get Taxe(){
  return this.form.get('Taxe')?.value
}
get diminution(){
  return this.form.get('diminution')?.value

}
set totalbudget(val:number){
   this.form.get('totalbudget')?.setValue(val)
}
get extension(){
  return this.form.get('extension')?.value

}
k:number=0.0
calcul(){
let m=((this.budgetInitiale * this.Taux)+this.extension)-this.diminution
let v= (this.budgetInitiale* this.Taxe)/100
this.k= v+m
  this.totalbudget=this.k
}
}