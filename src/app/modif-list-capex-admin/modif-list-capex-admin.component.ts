import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Opex } from '../models/opex';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
@Component({
  selector: 'app-modif-list-capex-admin',
  templateUrl: './modif-list-capex-admin.component.html',
  styleUrls: ['./modif-list-capex-admin.component.css']
})
export class ModifListCapexAdminComponent implements OnInit {
  constructor( private router :Router,private link:ServiceService,
   private ac:ActivatedRoute,private _coreSevise:CoreService, ){
  }
  id:number=1

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
  goTobondecommandeadd(){
    this.router.navigate(["/bondecommandeadd"])
  }
  goTolistbondecommande(){
    this.router.navigate(["/bondecommandelist"])
  }
  goTolistbondecommandeo(){
    this.router.navigate(["/bondecommandeopexlist"])
  }
  goTolistfactures(){
    this.router.navigate(["/factureslist"])
  }
  goTolistfactureso(){
    this.router.navigate(["/facturesolist"])
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
    Taux:new FormControl(""),
    totalbudget:new FormControl(""),
    realise:new FormControl(""),
    forecast:new FormControl(""),
    commantaire:new FormControl(""),
    devise:new FormControl("")
  })
  c:Capex=new Capex("",1,"","","","",1,1,1,"",1,"","",1,1,"","",1)
  getById(){
    this.link.getCapexByid(this.id).subscribe(response => {
      this.c=response
      console.log(this.c)
    })}
  modif(){
    let o:Capex=new Capex(this.libelleProjet,this.code,this.rubrique,this.libelleArticle,this.rubriquePrincipale,this.sousRubrique,this.budgetInitiale,this.totalbudget,this.extension,this.forecast,this.diminution,this.codeJira,this.codecg,this.Taxe,this.realise,this.devise,this.commantaire,this.Taux)
    this.link.updatee(this.id,o).subscribe({
      next: (val:any) => {
        this._coreSevise.openSnackBar('Capex modifed','done')

      },
      
        }
        )
        this._coreSevise.openSnackBar('Capex modifed','done')


      }
    initForm(){
  
      this.form.get('libelleProjet')?.setValue(this.c.libelleProjet)
      this.form.get('code')?.setValue(this.c.code)
      this.form.get('codecg')?.setValue(this.c.codecg)
      this.form.get('libelleArticle')?.setValue(this.c.libelleArticle)
      this.form.get('rubriquePrincipale')?.setValue(this.c.rubriquePrincipale)
      this.form.get('sousRubrique')?.setValue(this.c.sousRubrique)
      this.form.get('rubrique')?.setValue(this.c.rubrique)
      this.form.get('codeJira')?.setValue(this.c.codeJira)
      this.form.get('forecast')?.setValue(this.c.forecast)
      this.form.get('commantaire')?.setValue(this.c.commantaire)
      this.form.get('devise')?.setValue(this.c.devise)
      this.form.get('totalbudget')?.setValue(this.c.totalbudget)
      this.form.get('budgetInitiale')?.setValue(this.c.budgetInitiale)
      this.form.get('Taux')?.setValue(this.c.tauxDevise)
      this.form.get('Taxe')?.setValue(this.c.taxe)
      this.form.get('diminution')?.setValue(this.c.diminution)
      this.form.get('extension')?.setValue(this.c.extension)
   }
get budgetInitiale(){
  return this.form.get('budgetInitiale')?.value
}
get Taux(){
  return this.form.get('Taux')?.value
 
}
get extension(){
  return this.form.get('extension')?.value

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

get devise(){
  return this.form.get('devise')?.value
}
get totalbudget(){
  return this.form.get('totalbudget')?.value
}

k:number=0
calcul(){
let m=((this.budgetInitiale * this.Taux)+this.extension)-this.diminution
let v= (this.budgetInitiale* this.Taxe)/100
this.k= v+m
  this.totalbudget=this.k
}
ngOnInit(): void{
  this.id=this.ac.snapshot.params['id']
  console.log(this.id)
this.initForm()
  this.getById()

}
}

