import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-opex-lead',
  templateUrl: './liste-opex-lead.component.html',
  styleUrls: ['./liste-opex-lead.component.css']
})
export class ListeOpexLeadComponent {
  constructor( private router : Router){}
  
  goTohome(){
    this.router.navigate(["/home-lead"])
  }
 
  goTolistecapex(){
    this.router.navigate(["/liste-capex-lead"])
  }
  
  goTolisteopex(){
    this.router.navigate(["/liste-opex-lead"])
  }
 
  goToprojet(){
    this.router.navigate(["/projet-lead"])
  }
  goToconsommation(){
    this.router.navigate(["/consommation-lead"])
  }
}
