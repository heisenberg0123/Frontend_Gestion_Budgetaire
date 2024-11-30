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
import { Factureso } from '../models/factureo';

@Component({
  selector: 'app-modif-facture-opex',
  templateUrl: './modif-facture-opex.component.html',
  styleUrls: ['./modif-facture-opex.component.css']
})
export class ModifFactureOpexComponent implements OnInit   {
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
   
    o:new FormControl(""),
    b:new FormControl(""),


    ref:new FormControl("")
  })
  f:Factureso=new Factureso("",1,"",1,1)
  getById(){
    this.link.getFacturesoByid(this.id).subscribe(response => {
      this.f=response
      console.log(this.f)
    })}

    modif(){
      let f:Factureso=new Factureso(this.ref,this.realise,this.fournisseur,this.o)
      this.link.updateFacto(this.id,f).subscribe({
        next: (val:any) => {
          this._coreSevise.openSnackBar('Facture Opex modifed','done')
  
        },
        
          }
          )
          this._coreSevise.openSnackBar(' Facture Opex modifed','done')
  
  
        }
    Opex:any=[]
    initForm(){
  
      this.form.get('ref')?.setValue(this.f.ref)
      this.form.get('realise')?.setValue(this.f.realise)
      this.form.get('fournisseur')?.setValue(this.f.fournisseur)
      this.form.get('o')?.setValue(this.f.idOpex)
      this.form.get('b')?.setValue(this.f.idBondecommadeo)

      
   }
   Bondecommandeo:any=[]


    get realise(){
      return this.form.get('realise')?.value
    }
    get fournisseur(){
      return this.form.get('fournisseur')?.value
    }
    get ref(){
      return this.form.get('ref')?.value
    }
   
    get o(){
      return this.form.get('o')?.value
    }
    get b(){
      return this.form.get('b')?.value
    }

    ngOnInit(): void{
      this.id=this.ac.snapshot.params['id']
      console.log(this.id)
      this.initForm()
      this.getById()
      this.link.getOpex().subscribe((opex)=>{
        this.Opex=opex
      })
      this.link.getBondecommandeo().subscribe((bondecommadeo)=>{
        this.Bondecommandeo=bondecommadeo
      })
  
    }
}
