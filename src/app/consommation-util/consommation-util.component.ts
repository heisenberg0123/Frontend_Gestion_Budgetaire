import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consommation-util',
  templateUrl: './consommation-util.component.html',
  styleUrls: ['./consommation-util.component.css']
})
export class ConsommationUtilComponent {
  constructor( private router : Router){}

  goTohome(){
    this.router.navigate(["/home-util"])
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
  goToconsommation(){
    this.router.navigate(["/consommation-util"])
  }
}
