import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet-lead',
  templateUrl: './projet-lead.component.html',
  styleUrls: ['./projet-lead.component.css']
})
export class ProjetLeadComponent {
  constructor( private router :Router){

  }
  goToprojet(){
    this.router.navigate(["/projet-lead"])
  }
  
  goTolistecapex(){
    this.router.navigate(["/liste-capex-lead"])
  }
 
  goTolisteopex(){
    this.router.navigate(["/liste-opex-lead"])
  }
  goTohome(){
    this.router.navigate(["/home-lead"])
  }
  goToconsommation(){
    this.router.navigate(["/consommation-lead"])
  }
}
