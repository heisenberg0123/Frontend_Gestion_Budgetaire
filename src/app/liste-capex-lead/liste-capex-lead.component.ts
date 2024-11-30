import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-capex-lead',
  templateUrl: './liste-capex-lead.component.html',
  styleUrls: ['./liste-capex-lead.component.css']
})
export class ListeCapexLeadComponent {
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
