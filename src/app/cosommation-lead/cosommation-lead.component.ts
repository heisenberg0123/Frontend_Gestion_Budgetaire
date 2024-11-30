import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cosommation-lead',
  templateUrl: './cosommation-lead.component.html',
  styleUrls: ['./cosommation-lead.component.css']
})
export class CosommationLeadComponent {
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
