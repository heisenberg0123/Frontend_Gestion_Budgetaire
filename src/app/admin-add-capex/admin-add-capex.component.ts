import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { Projects } from '../models/projects';


@Component({
  selector: 'app-admin-add-capex',
  templateUrl: './admin-add-capex.component.html',
  styleUrls: ['./admin-add-capex.component.css']
})
export class AdminAddCapexComponent implements OnInit {
  errormsg:any;

  constructor( private router :Router,private link:ServiceService,private _dialogRef:MatDialogRef<AdminAddCapexComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private _coreSevise:CoreService){

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
    libelleProjet:new FormControl(""),
    code:new FormControl(""),
    codecg:new FormControl(""),
    libelleArticle:new FormControl(""),
    rubriquePrincipale:new FormControl(""),
    sousRubrique:new FormControl(""),
    rubrique:new FormControl(""),
    codeJira:new FormControl(""),
    budgetInitiale:new FormControl(""),
    extension:new FormControl(""),
    diminution:new FormControl(""),
    Taxe:new FormControl(""),
    Taux:new FormControl(""),
    totalbudget:new FormControl(""),
    realise:new FormControl(""),
    forecast:new FormControl(""),
    commantaire:new FormControl(""),
    devise:new FormControl("")
  })
  capex:Capex[]=[]


ajouter(){
  if(this.form.valid){

  let c:Capex=new Capex(this.form.get('libelleProjet')?.value,this.form.get('code')?.value,this.form.get('rubrique')?.value,this.form.get('libelleArticle')?.value,this.form.get('rubriquePrincipale')?.value,this.form.get('sousRubrique')?.value,this.form.get('budgetInitiale')?.value,this.form.get('totalbudget')?.value,this.form.get('extension')?.value,this.form.get('forecast')?.value,this.form.get('diminution')?.value,this.form.get('codeJira')?.value,this.form.get('codecg')?.value,this.form.get('Taxe')?.value,this.form.get('realise')?.value,this.form.get('devise')?.value,this.form.get('commantaire')?.value,this.form.get('Taux')?.value)
  
  
  this.link.createCapex(c).subscribe(
    {

next: (val:any) => {


  
  this._coreSevise.openSnackBar('Capex Ajouter','Terminé')
  this._dialogRef.close(true);
  let k:any=val
  let p:Projects=new Projects("active",k.id)
  this.link.createProjects(p).subscribe((v)=>{
    console.log(v)
  })
}

 }
 
  )
  }
  else{
    this.errormsg  =  'all filed is required';
  }
}






saa(){
  if(this.form.valid){
console.log(this.form.value)

  }else{
    this.errormsg  =  'all filed is required';
  }

}








get budgetInitiale(){
  return this.form.get('budgetInitiale')?.value
}
get Taux(){
  return this.form.get('Taux')?.value
 
}
get extension(){
  return this.form.get('extension')?.value

}
get Taxe(){
  return this.form.get('Taxe')?.value
}
get diminution(){
  return this.form.get('diminution')?.value

}
set totalbudget(val:number){
   this.form.get('totalbudget')?.setValue(val)
}

k:number=0
calcul(){
let m=((this.budgetInitiale * this.Taux)+this.extension)-this.diminution
let v= (this.budgetInitiale* this.Taxe)/100
this.k= v+m
  this.totalbudget=this.k
}
ngOnInit(): void{
this.form.patchValue(this.data);





}


}
