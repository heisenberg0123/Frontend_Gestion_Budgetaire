import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Opex } from '../models/opex';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Bondecommandeo } from '../models/bondecommandeo';
import { CoreService } from '../core/core.service';
import { Utilisateurs } from '../models/utilisateurs';
@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent {
  constructor( private router :Router,private link:ServiceService,
    private ac:ActivatedRoute,private _coreSevise:CoreService){

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
  goToutil(){
    this.router.navigate(["/liste-utilisateur-admin"])
  }
  form:FormGroup=new FormGroup({

    nom:new FormControl(""),
    prenom:new FormControl(""),
    email:new FormControl(""),
    motdepasse:new FormControl(""),


    role:new FormControl(""),
  })

    c!:Utilisateurs

    getById(){
      this.link.getUtilisateurByid(this.id).subscribe(response => {
        this.c=response
        console.log(this.c)
      }
        )
    }
    id:number=1

    edit(id:number){

      this.link.getUtilisateurByid(id).subscribe(Response=>{
        this.c=Response
        this.form.get('nom')?.setValue(this.c.nom)
       this.form.get('prenom')?.setValue(this.c.prenom)
       this.form.get('email')?.setValue(this.c.email)
       this.form.get('role')?.setValue(this.c.role)

       this.form.get('motdepasse')?.setValue(this.c.motdepasse)


      })

    }
  
    modif(){
      let o:Utilisateurs=new Utilisateurs(this.nom,this.prenom,this.email,this.role,this.motdepasse)
      this.link.updateUtil(this.id,o).subscribe({
        next: (val:any) => {
          this._coreSevise.openSnackBar('Utilisateur Modifier','Terminé')
    
        },
        
          }
          )
          this._coreSevise.openSnackBar('Utilisateur Modifier','Trminé')
    
    
        }
        initForm(){
  
          this.form.get('nom')?.setValue(this.c.nom)
          this.form.get('prenom')?.setValue(this.c.prenom)
          this.form.get('email')?.setValue(this.c.email)
          this.form.get('motdepasse')?.setValue(this.c.motdepasse)
          this.form.get('role')?.setValue(this.c.role)



     
  }
  get nom(){
    return this.form.get('nom')?.value
  }
  get prenom(){
    return this.form.get('prenom')?.value
  }
  get email(){
    return this.form.get('email')?.value
  }
  get motdepasse(){
    return this.form.get('motdepasse')?.value
  }
  get role(){
    return this.form.get('role')?.value
  }

  ngOnInit(): void{
    this.id=this.ac.snapshot.params['id']
    console.log(this.id)
    
    this.edit(this.id)
    this.getById()
  
  }
}
