import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../core/core.service';
import { ServiceService } from '../services/service.service';
import { Capex } from '../models/capex';
import { MatDialog } from '@angular/material/dialog';
import { CompteComponent } from '../compte/compte.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor( private router :Router,private link:ServiceService, private _coreSevise:CoreService,private _dialog:MatDialog)
{

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

    this.q=false


  }

  else{
    this.verif=true
    this.q=true


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
  this.getBondeo()

  this.getOpex()
  this.getFact()
  this.getFacto()

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
bo:any
fo:any
Capex:any=[]
Opex:any=[]
t:any
to:any
Bondecommandeo:any=[]
Bondecommande:any=[]
Factureso:any=[]
Factures:any=[]
getBonde(){
  this.link.getBondecommande().subscribe((res)=>{

    this.Bondecommande=res
    this.b=this.Bondecommande.length
    console.log(this.b)
  })
}
getBondeo(){
  this.link.getBondecommandeo().subscribe((res)=>{

    this.Bondecommandeo=res
    this.bo=this.Bondecommandeo.length
    console.log(this.bo)
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

getFacto(){
  this.link.getFactureso().subscribe((res)=>{
    this.Factureso=res
    this.fo=this.Factureso.length
    console.log(this.fo)
  })
}


openBande(){
  const dialogRef= this._dialog.open(CompteComponent);
   dialogRef.afterClosed().subscribe({
   
   });
 }


}
