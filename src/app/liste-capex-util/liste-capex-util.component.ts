import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-capex-util',
  templateUrl: './liste-capex-util.component.html',
  styleUrls: ['./liste-capex-util.component.css']
})
export class ListeCapexUtilComponent {
  constructor( private router : Router){}
  
  goTohome(){
    this.router.navigate(["/home-util"])
  }
 
  goTolistecapex(){
    this.router.navigate(["/liste-capex-util"])
  }
  
  goTolisteopex(){
    this.router.navigate(["/liste-opex-util"])
  }
 
  goToprojet(){
    this.router.navigate(["/projet-util"])
  }
  goToconsommation() {
    this.router.navigate(["/consommation-util"])
  }
}
