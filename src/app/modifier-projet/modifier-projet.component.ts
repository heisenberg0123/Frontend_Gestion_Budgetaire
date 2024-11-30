import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-projet',
  templateUrl: './modifier-projet.component.html',
  styleUrls: ['./modifier-projet.component.css']
})
export class ModifierProjetComponent {
  constructor( private router :Router){

  }
  goToprojet(){
    this.router.navigate(["/projet"])
  }
  goToajoutcapex(){
    this.router.navigate(["/ajout-capex"])
  }
  goTolistecapex(){
    this.router.navigate(["/liste-capex"])
  }
  goToajoutopex(){
    this.router.navigate(["/opex-admin"])
  }
  goTolisteopex(){
    this.router.navigate(["/liste-opex-admin"])
  }
  goToajoututilisateur(){
    this.router.navigate(["/add-utilisateur"])
  }
  goTolisteutilisateur(){
    this.router.navigate(["/liste-utilisateur"])
  }
  goTohome(){
    this.router.navigate(["/home-admin"])
  }
  goToconsommation(){
    this.router.navigate(["/consommation-admin"])
  }
  goToanalyse(){
    this.router.navigate(["/analyse-admin"])
  }
}
