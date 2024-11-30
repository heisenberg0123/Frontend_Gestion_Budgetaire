import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Utilisateurs } from '../models/utilisateurs';
import { CoreService } from '../core/core.service';
@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent  {
  constructor( private router :Router,private link:ServiceService,private _dialogRef:MatDialogRef<AddUtilisateurComponent>,private _coreSevise:CoreService
){

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

    nom:new FormControl(""),
    prenom:new FormControl(""),
    email:new FormControl(""),
    role:new FormControl(""),
    motdepasse:new FormControl(""),

  })
  ajouter(){
    let t:Utilisateurs=new Utilisateurs(this.form.get('nom')?.value,this.form.get('prenom')?.value,this.form.get('email')?.value,this.form.get('role')?.value,this.form.get('motdepasse')?.value)
    this.link.createUtilisateur(t).subscribe({
  
next: (val:any) => {


  
  this._coreSevise.openSnackBar('Utilisateur Ajouter','Terminé')
  this._dialogRef.close(true);
  
    }
  }
    )
  
  }
  get nom(){
    return this.form.get('nom')?.value
  }
  get prenom(){
    return this.form.get('prenom')?.value
   
  }
  get role(){
    return this.form.get('role')?.value
  
  }
  get motdepasse(){
    return this.form.get('motdepasse')?.value
  }

  get email(){
    return this.form.get('email')?.value
  
  }

}
