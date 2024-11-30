import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet-manager',
  templateUrl: './projet-manager.component.html',
  styleUrls: ['./projet-manager.component.css']
})
export class ProjetManagerComponent {
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
}
