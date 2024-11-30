import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-lead',
  templateUrl: './home-lead.component.html',
  styleUrls: ['./home-lead.component.css']
})
export class HomeLeadComponent {
  constructor( private router : Router){}
  goTohome(){
    this.router.navigate(["/home-lead"])
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
  goToconsommation(){
    this.router.navigate(["/consommation-lead"])
  }
}
