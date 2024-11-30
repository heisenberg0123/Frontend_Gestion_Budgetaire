import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Opex } from '../models/opex';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Bondecommande } from '../models/bondecommande';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-modif-bandecommande-capex',
  templateUrl: './modif-bandecommande-capex.component.html',
  styleUrls: ['./modif-bandecommande-capex.component.css']
})
export class ModifBandecommandeCapexComponent  implements OnInit   {
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
    engage:new FormControl(""),
    fournisseur:new FormControl(""),
   
    c:new FormControl(""),
    ref:new FormControl("")
  })
  b:Bondecommande=new Bondecommande("",1,"",1,1)
  getById(){
    this.link.getBondecommandeByid(this.id).subscribe(response => {
      this.b=response
      console.log(this.b)
    })}

    modif(){
      let b:Bondecommande=new Bondecommande(this.ref,this.engage,this.fournisseur,this.c)
      this.link.updateee(this.id,b).subscribe({
        next: (val:any) => {
          this._coreSevise.openSnackBar('Bonde Commande modifed','done')
  
        },
        
          }
          )
          this._coreSevise.openSnackBar('Bonde Commande modifed','done')
  
  
        }
    Capex:any=[]
    initForm(){
  
      this.form.get('ref')?.setValue(this.b.ref)
      this.form.get('engage')?.setValue(this.b.engage)
      this.form.get('fournisseur')?.setValue(this.b.fournisseur)
      this.form.get('c')?.setValue(this.b.idCapex)
      
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
   
    get c(){
      return this.form.get('c')?.value
    }


    ngOnInit(): void{
      this.id=this.ac.snapshot.params['id']
      console.log(this.id)
      this.initForm()
      this.getById()
      this.link.getCapex().subscribe((capex)=>{
        this.Capex=capex
      })
    }
}
