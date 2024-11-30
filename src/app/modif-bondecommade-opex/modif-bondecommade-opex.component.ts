import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Opex } from '../models/opex';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Bondecommandeo } from '../models/bondecommandeo';
import { CoreService } from '../core/core.service';
@Component({
  selector: 'app-modif-bondecommade-opex',
  templateUrl: './modif-bondecommade-opex.component.html',
  styleUrls: ['./modif-bondecommade-opex.component.css']
})
export class ModifBondecommadeOpexComponent     {
  constructor( private router :Router,private link:ServiceService,
   private ac:ActivatedRoute, private _coreSevise:CoreService){
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
    engage:new FormControl(""),
    fournisseur:new FormControl(""),
   
    o:new FormControl(""),
    ref:new FormControl("")
  })
  bo:Bondecommandeo=new Bondecommandeo("",1,"",1)
  getById(){
    this.link.getBondecommandeoByid(this.id).subscribe(response => {
      this.bo=response
      console.log(this.bo)
    })}

    modif(){
      let bo:Bondecommandeo=new Bondecommandeo(this.ref,this.engage,this.fournisseur,this.o)
      this.link.updateeee(this.id,bo).subscribe({
        next: (val:any) => {
          this._coreSevise.openSnackBar('Bonde Commande Opex modifed','done')
  
        },
        
          }
          )
          this._coreSevise.openSnackBar('Bonde Commande Opex modifed','done')
  
  
        }
    Opex:any=[]
    initForm(){
  
      this.form.get('ref')?.setValue(this.bo.ref)
      this.form.get('engage')?.setValue(this.bo.engage)
      this.form.get('fournisseur')?.setValue(this.bo.fournisseur)
      this.form.get('o')?.setValue(this.bo.idOpex)
      
   }

    get engage(){
      return this.form.get('engage')?.value
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


    ngOnInit(): void{
      this.id=this.ac.snapshot.params['id']
      console.log(this.id)
      this.initForm()
      this.getById()
      this.link.getOpex().subscribe((opex)=>{
        this.Opex=opex
      })
    }
}


