import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet-util',
  templateUrl: './projet-util.component.html',
  styleUrls: ['./projet-util.component.css']
})
export class ProjetUtilComponent {
  constructor( private router :Router){

  }
  goToprojet(){
    this.router.navigate(["/projet-util"])
  }
  
  goTolistecapex(){
    this.router.navigate(["/liste-capex-util"])
  }
 
  goTolisteopex(){
    this.router.navigate(["/liste-opex-util"])
  }
  goTohome(){
    this.router.navigate(["/home-util"])
  }
  goToconsommation() {
    this.router.navigate(["/consommation-util"])
  }
  
}
