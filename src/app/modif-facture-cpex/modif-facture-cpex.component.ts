import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Opex } from '../models/opex';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Bondecommande } from '../models/bondecommande';
import { CoreService } from '../core/core.service';
import { Factures } from '../models/facture';
@Component({
  selector: 'app-modif-facture-cpex',
  templateUrl: './modif-facture-cpex.component.html',
  styleUrls: ['./modif-facture-cpex.component.css']
})
export class ModifFactureCpexComponent  implements OnInit   {
  constructor( private router :Router,private link:ServiceService, private _coreSevise:CoreService,
   private ac:ActivatedRoute){
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
    realise:new FormControl(""),
    fournisseur:new FormControl(""),
   
    c:new FormControl(""),
    ref:new FormControl("")
  })
  f:Factures=new Factures("",1,"",1,1)
  getById(){
    this.link.getFacturesByid(this.id).subscribe(response => {
      this.f=response
      console.log(this.f)
    })}

    modif(){
      let f:Factures=new Factures(this.ref,this.realise,this.fournisseur,this.c)
      this.link.updateFact(this.id,f).subscribe({
        next: (val:any) => {
          this._coreSevise.openSnackBar('Facture  modifed','done')
  
        },
        
          }
          )
          this._coreSevise.openSnackBar(' Facture modifed','done')
  
  
        }
    Capex:any=[]
    initForm(){
  
      this.form.get('ref')?.setValue(this.f.ref)
      this.form.get('realise')?.setValue(this.f.realise)
      this.form.get('fournisseur')?.setValue(this.f.fournisseur)
      this.form.get('c')?.setValue(this.f.idCapex)
      this.form.get('b')?.setValue(this.f.idBondecommade)
   }

    get realise(){
      return this.form.get('realise')?.value
    }
    get fournisseur(){
      return this.form.get('fournisseur')?.value
    }
    get ref(){
      return this.form.get('ref')?.value
    }
   
    get c(){
      return this.form.get('c')?.value
    }
    get b(){
      return this.form.get('b')?.value
    }
    Bondecommande:any=[]


    ngOnInit(): void{
      this.id=this.ac.snapshot.params['id']
      console.log(this.id)
      this.initForm()
      this.getById()
      this.link.getCapex().subscribe((capex)=>{
        this.Capex=capex
      })
      this.link.getBondecommande().subscribe((bondecommade)=>{
        this.Bondecommande=bondecommade
      })
  
    }
}
