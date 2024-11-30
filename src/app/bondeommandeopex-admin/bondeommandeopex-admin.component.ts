import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Bondecommandeo } from '../models/bondecommandeo';
import { CoreService } from '../core/core.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Projets } from '../models/projets';
@Component({
  selector: 'app-bondeommandeopex-admin',
  templateUrl: './bondeommandeopex-admin.component.html',
  styleUrls: ['./bondeommandeopex-admin.component.css']
})
export class BondeommandeopexAdminComponent {
  constructor( private router :Router,private link:ServiceService,private _coreSevise:CoreService,private _dialogRef:MatDialogRef<BondeommandeopexAdminComponent>){

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
  Opex:any=[]
  ngOnInit():void{
    this.link.getOpex().subscribe((opex)=>{
      this.Opex=opex
    })
  }
  form:FormGroup=new FormGroup({
    engage:new FormControl(""),
    fournisseur:new FormControl(""),
    o:new FormControl(""),
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
  get o(){
    return this.form.get('o')?.value
  }
  ajouter(){
    let b:Bondecommandeo=new Bondecommandeo(this.ref,this.engage,this.fournisseur,this.o)
    this.link.createBondecommandeo(b).subscribe({
      next: (val:any) => {
        this._coreSevise.openSnackBar('Bon de Commande Opex Ajouter','Terminé')
        this._dialogRef.close(true);
        let v:any=val
        let p:Projets=new Projets("active",v.idOpex,v.id)
        this.link.updateProjetsbyOpex(v.idOpex,p).subscribe((v)=>{
          console.log(v)
        })
      },
      
        }
        )
      }
}
  

                                                



