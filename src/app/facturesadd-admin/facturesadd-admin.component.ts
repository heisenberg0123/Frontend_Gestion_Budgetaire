import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Bondecommande } from '../models/bondecommande';
import { Factures } from '../models/facture';
import { CoreService } from '../core/core.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Projects } from '../models/projects';
@Component({
  selector: 'app-facturesadd-admin',
  templateUrl: './facturesadd-admin.component.html',
  styleUrls: ['./facturesadd-admin.component.css']
})
export class FacturesaddAdminComponent {
  constructor( private router :Router,private link:ServiceService, private _coreSevise:CoreService,private _dialogRef:MatDialogRef<FacturesaddAdminComponent>){

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
this.link.getBondecommande().subscribe((bondecommande)=>{
  this.Bondecommande=bondecommande
})
  }
  Bondecommande:any=[]


  form:FormGroup=new FormGroup({
    realise:new FormControl(""),
    fournisseur:new FormControl(""),
   
    c:new FormControl(""),
    bo:new FormControl(""),

    ref:new FormControl("")
  })
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
  get bo(){
    return this.form.get('bo')?.value
  }
  ajouter(){
    let f:Factures=new Factures(this.ref,this.realise,this.fournisseur,this.c,this.bo)
    this.link.createFactures(f).subscribe({
      next: (val:any) => {
        this._coreSevise.openSnackBar('Facture Ajouter','termine')
        this._dialogRef.close(true);
        let v:any=val
        this.link.getBondecommandeByidCapex(v.idCapex).subscribe((res)=>{
         let m:any=res
         
          let p:Projects=new Projects("active",v.idCapex,m.id,v.id)
          this.link.updateProjectsbyCapex(v.idCapex,p).subscribe((v)=>{
            console.log(v)
          })
        })
        
      },
      
        }
        )
      }


}
  

                                                



