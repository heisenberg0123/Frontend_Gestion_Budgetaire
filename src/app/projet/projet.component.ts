import { Component } from '@angular/core';  
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { Factures } from '../models/facture';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { Bondecommande } from '../models/bondecommande';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {
  constructor( private router :Router,private service:ServiceService){

  }
  goTohome(){
    this.router.navigate(["/home-admin"])
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
console.log(this.Projects)
  }
  Bondecommande:any=[]

Capex:any=[]
Factures:any=[]
Projects:any=[]


getCapex(){
  this.service.getCapex().subscribe((response)=>{
    this.Capex=response
    console.log(this.Capex)
  })
}




getBande(){
  this.service.getBondecommande().subscribe((Response)=>{
    this.Bondecommande=Response
    console.log(this.Bondecommande)
  })
}


getFact(){
  this.service.getFactures().subscribe((Response)=>{
    this.Factures=Response
    console.log(this.Factures)
  })
}



getPro(){
  this.service.getProjects().subscribe((response)=>{
    this.Projects=response
    console.log(this.Projects)
   

  
    this.service.getCapex().subscribe(capex => {
      this.Projects.forEach((order: { capex: Capex | undefined; idCapex: number | undefined; }) => {
        order.capex = capex.find(c => c.id === order.idCapex);
      });
      console.log(this.Projects)

  })
 
  this.service.getBondecommande().subscribe(bondecommande => {
    this.Projects.forEach((order: { bondecommande: Bondecommande | undefined; idBondecommade: number | undefined; }) => {
      order.bondecommande = bondecommande.find(b => b.id === order.idBondecommade);
    });



    this.service.getFactures().subscribe(factures => {
      this.Projects.forEach((order: { factures: Factures | undefined; idFactures: number | undefined; }) => {
        order.factures = factures.find(b => b.id === order.idFactures);
      });
  
  })

  console.log(this.Projects)
})

 
})

  
 
 

  
 
  







}
}

