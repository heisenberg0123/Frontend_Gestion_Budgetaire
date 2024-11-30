import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Factureso } from '../models/factureo';
import { CoreService } from '../core/core.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Projets } from '../models/projets';
@Component({
  selector: 'app-factureopexadd-admin',
  templateUrl: './factureopexadd-admin.component.html',
  styleUrls: ['./factureopexadd-admin.component.css']
})
export class FactureopexaddAdminComponent {
  constructor( private router :Router,private link:ServiceService,private _coreSevise:CoreService,private _dialogRef:MatDialogRef<FactureopexaddAdminComponent> ){

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
  Bondecommandeo:any=[]
  ngOnInit():void{
    this.link.getOpex().subscribe((opex)=>{
      this.Opex=opex
    })
    this.link.getBondecommandeo().subscribe((bondecommadeo)=>{
      this.Bondecommandeo=bondecommadeo
    })

    
  }
  form:FormGroup=new FormGroup({
    realise:new FormControl(""),
    fournisseur:new FormControl(""),
    o:new FormControl(""),
    bc:new FormControl(""),

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
  get o(){
    return this.form.get('o')?.value
  }
  get bc(){
    return this.form.get('bc')?.value
  }
  ajouter(){
    let f:Factureso=new Factureso(this.ref,this.realise,this.fournisseur,this.o,this.bc)
    this.link.createFactureso(f).subscribe({
      next: (val:any) => {
        this._coreSevise.openSnackBar('Facture Opex Ajouter','terminé')
        this._dialogRef.close(true);
        let v:any=val
        this.link.getBondecommandeByidOpex(v.idOpex).subscribe((res)=>{
         let m:any=res
         
          let p:Projets=new Projets("active",v.idOpex,m.id,v.id)
          this.link.updateProjetsbyOpex(v.idOpex,p).subscribe((v)=>{
            console.log(v)
          })
        })
        
      },
      
        }
        )
      }
      

}
