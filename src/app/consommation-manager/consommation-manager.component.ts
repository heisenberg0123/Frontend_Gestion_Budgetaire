import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consommation-manager',
  templateUrl: './consommation-manager.component.html',
  styleUrls: ['./consommation-manager.component.css']
})
export class ConsommationManagerComponent {
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
