import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { CoreService } from '../core/core.service';
import { MatDialog } from '@angular/material/dialog';
import { CompteComponent } from '../compte/compte.component';

@Component({
  selector: 'app-analyse-admin',
  templateUrl: './analyse-admin.component.html',
  styleUrls: ['./analyse-admin.component.css']
})
export class AnalyseAdminComponent {
  constructor( private router :Router,private link:ServiceService, private _coreSevise:CoreService,private _dialog:MatDialog){

  }
  goTohome(){
    this.router.navigate(["/home-admin"])
  }
  goToCompte(){
    this.router.navigate(["/compte"])
  }
  goToprojet(){
    this.router.navigate(["/projet-admin"])
  }
  goToproject(){
    this.router.navigate(["/project-admin"])
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
  analyse(){
    this.router.navigate(["/analyse"])
  }
  

logout(){
  localStorage.clear()
  this.router.navigate(['/login'])
}
nom=localStorage.getItem('nom')




verif=true
q=true
verify(){
  if(localStorage.getItem("role")=="admin"){
    this.verif=false
  }
  if(localStorage.getItem("role")=="admin"||localStorage.getItem("role")=="Lead" ){

    this.verif=false
    this.q=false


  }

  else{
    this.verif=true

  }
}
vv(){
   
  if(localStorage.getItem('email')==null)
  { 
    this.router.navigate(['/login'])}


}
ngOnInit():void{
  this.vv()
  this.verify()
  this.getallcapex()
  this.getBonde()
  this.getOpex()
  this.getFact()
}
getallcapex(){
  this.link.getCapex().subscribe((res)=>{
this.Capex=res
this.m=this.Capex.length
console.log(this.m)
  })
}
m:any
b:any
o:any
f:any
Capex:any=[]
Opex:any=[]

Bondecommande:any=[]
Factures:any=[]
getBonde(){
  this.link.getBondecommande().subscribe((res)=>{

    this.Bondecommande=res
    this.b=this.Bondecommande.length
    console.log(this.b)
  })
}


getOpex(){
  this.link.getOpex().subscribe((res)=>{
    this.Opex=res
    this.o=this.Opex.length
    console.log(this.o)
  })
}
getFact(){
  this.link.getFactures().subscribe((res)=>{
    this.Factures=res
    this.f=this.Factures.length
    console.log(this.f)
  })
}


openBande(){
  const dialogRef= this._dialog.open(CompteComponent);
   dialogRef.afterClosed().subscribe({
   
   });
 }

}
