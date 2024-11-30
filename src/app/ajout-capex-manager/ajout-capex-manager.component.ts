import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-capex-manager',
  templateUrl: './ajout-capex-manager.component.html',
  styleUrls: ['./ajout-capex-manager.component.css']
})
export class AjoutCapexManagerComponent {
  constructor( private router :Router){

  }
  goTohome(){
    this.router.navigate(["/home-manager"])
  }
  goToprojet(){
    this.router.navigate(["/projet-manager"])
  }
  goToajoutcapex(){
    this.router.navigate(["/ajout-capex-manager"])
  }
  goTolistecapex(){
    this.router.navigate(["/liste-capex-manager"])
  }
  goToajoutopex(){
    this.router.navigate(["/ajout-opex-manager"])
  }
  goTolisteopex(){
    this.router.navigate(["/liste-opex-manager"])
  }
  goToconsommation(){
    this.router.navigate(["/consommation-manager"])
  }
 
}
