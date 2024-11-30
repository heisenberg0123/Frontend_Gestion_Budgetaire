import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Bondecommande } from '../models/bondecommande';
import { CoreService } from '../core/core.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Projects } from '../models/projects';
@Component({
  selector: 'app-bondecommandeadd',
  templateUrl: './bondecommandeadd.component.html',
  styleUrls: ['./bondecommandeadd.component.css']
})
export class BondecommandeaddComponent {
  constructor( private router :Router,private link:ServiceService,private _coreSevise:CoreService ,private _dialogRef:MatDialogRef<BondecommandeaddComponent>){

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

  Capex:any=[]
  ngOnInit():void{
    
    this.link.getCapex().subscribe((capex)=>{
      this.Capex=capex
    })

  }
  form:FormGroup=new FormGroup({
    engage:new FormControl(""),
    fournisseur:new FormControl(""),
   
    c:new FormControl(""),
    ref:new FormControl("")
  })
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
  ajouter(){
    let b:Bondecommande=new Bondecommande(this.ref,this.engage,this.fournisseur,this.c)
    this.link.createBondecommande(b).subscribe({
      next: (val:any) => {
        this._coreSevise.openSnackBar('Bon de Commande Ajouter','Terminé')
        this._dialogRef.close(true);
        let v:any=val
        let p:Projects=new Projects("active",v.idCapex,v.id)
        this.link.updateProjectsbyCapex(v.idCapex,p).subscribe((v)=>{
          console.log(v)
        })

      },
      
        }
        )
      }

}
  

                                                

