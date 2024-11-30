import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { Factures } from '../models/facture';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { Bondecommande } from '../models/bondecommande';
import { Opex } from '../models/opex';
import { Bondecommandeo } from '../models/bondecommandeo';
import { Factureso } from '../models/factureo';

@Component({
  selector: 'app-projects-admin',
  templateUrl: './projects-admin.component.html',
  styleUrls: ['./projects-admin.component.css']
})
export class ProjectsAdminComponent {
  constructor( private router :Router,private service:ServiceService){

  }
  goTohome(){
    this.router.navigate(["/home-admin"])
  }
  
  analyse(){
    this.router.navigate(["/analyse"])
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
  


   
  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  nom=localStorage.getItem('nom')

  verif=true
verify(){
  if(localStorage.getItem("role")=="admin"){
    this.verif=false
  }

  else{
    this.verif=true

  }
}


  ngOnInit():void{
    this.verify()
      this.getPro()
console.log(this.Projets)
  }
  Bondecommandeo:any=[]

Opex:any=[]
Factureso:any=[]
Projets:any=[]


getOpex(){
  this.service.getOpex().subscribe((response)=>{
    this.Opex=response
    console.log(this.Opex)
  })
}




getBande(){
  this.service.getBondecommandeo().subscribe((Response)=>{
    this.Bondecommandeo=Response
    console.log(this.Bondecommandeo)
  })
}


getFact(){
  this.service.getFactureso().subscribe((Response)=>{
    this.Factureso=Response
    console.log(this.Factureso)
  })
}



getPro(){
  this.service.getProjets().subscribe((response)=>{
    this.Projets=response
    console.log(this.Projets)
   

  
    this.service.getOpex().subscribe(opex => {
      this.Projets.forEach((order: { opex: Opex| undefined; idOpex: number | undefined; }) => {
        order.opex = opex.find(c => c.id === order.idOpex);
      });
      console.log(this.Projets)

  })
 
  this.service.getBondecommandeo().subscribe(bondecommandeo => {
    this.Projets.forEach((order: { bondecommandeo: Bondecommandeo | undefined; idBondecommadeo: number | undefined; }) => {
      order.bondecommandeo = bondecommandeo.find(b => b.id === order.idBondecommadeo);
    });



    this.service.getFactureso().subscribe(factureso => {
      this.Projets.forEach((order: { factureso: Factureso | undefined; idFactureso: number | undefined; }) => {
        order.factureso= factureso.find(b => b.id === order.idFactureso);
      });
  
  })

  console.log(this.Projets)
})

 
})

  
 
 

  
 
  







}
}

