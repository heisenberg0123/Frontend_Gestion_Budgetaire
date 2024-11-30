import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Capex } from '../models/capex';
import { ServiceService } from '../services/service.service';
import * as XLSX from 'xlsx';
import { FormControl, FormGroup } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AdminAddCapexComponent } from '../admin-add-capex/admin-add-capex.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { CoreService } from '../core/core.service';
import { AddUtilisateurComponent } from '../add-utilisateur/add-utilisateur.component';
import { Utilisateurs } from '../models/utilisateurs';
@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private router :Router,private service:ServiceService,private _dialog:MatDialog,private _coreSevise:CoreService){

  }
  goTohome(){
    this.router.navigate(["/home-admin"])
  }
  goToprojet(){
    this.router.navigate(["/projet-admin"])
  }

  goToproject(){
    this.router.navigate(["/project-admin"])
  }
  goToajoutcapex(){
    this.router.navigate(["/capex-admin"])
  }
  goTolistecapex(){
    this.router.navigate(["/liste-capex-admin"])
  }
  goToajoutopex(){
    this.router.navigate(["/opex-admin"])
  }
  goTolisteopex(){
    this.router.navigate(["/liste-opex-admin"])
  }
  goToajoututilisateur(){
    this.router.navigate(["/add-utilisateur-admin"])
  }
  goTolisteutilisateur(){
    this.router.navigate(["/liste-utilisateur-admin"])
  }
  goToconsommation(){
    this.router.navigate(["/consommation-admin"])
  }
  goToanalyse(){
    this.router.navigate(["/analyse-admin"])
  }
  goTobondecommandeadd(){
    this.router.navigate(["/bondecommandeadd"])
  }
  goTolistbondecommande(){
    this.router.navigate(["/bondecommandelist"])
  }
  goTolistbondecommandeo(){
    this.router.navigate(["/bondecommandeopexlist"])
  }
  goTolistfactures(){
    this.router.navigate(["/factureslist"])
  }
  goTolistfactureso(){
    this.router.navigate(["/facturesolist"])
  }
  
  analyse(){
    this.router.navigate(["/analyse"])
  }
  


  
  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
  nom=localStorage.getItem('nom')

  verif=true
verify(){
  if(localStorage.getItem("role")=="admin"){
    this.verif=false
  }

  else{
    this.verif=true

  }
}



  openBande(){
    const dialogRef= this._dialog.open(AddUtilisateurComponent);
     dialogRef.afterClosed().subscribe({
       next:(val) => {
 if(val){
   this.getAllutlisateurs()
 }
       },
     });
   }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */ 
    const fileName = 'ExcelSheet.xlsx';
    XLSX.writeFile(wb, fileName);
 
  }
  value:String=""

  k=0
  utilisateurs:Utilisateurs[]=[]
  form:FormGroup=new FormGroup({

  })
  get prenom(){
    return this.form.get('prenom')?.value
  }

  takeValue(){
   let filterdBondecommande:Utilisateurs[]=[]
    let k=this.prenom
   this.utilisateurs.forEach(element => {
    if(element.nom==k){
      filterdBondecommande.push(element)
    }    
   });
    this.utilisateurs=filterdBondecommande
  }
  change(){
    this.getAllutlisateurs()
  }
  
  getAllutlisateurs(){
    this.service.getUtilisateur().subscribe(response => {
      this.utilisateurs=response
      console.log(this.utilisateurs)

    })
  }



  vv(){
   
    if(localStorage.getItem('email')==null)
    { 
      this.router.navigate(['/login'])}
  
  
  }





ngOnInit():void{

  this.vv()
  this.verify()
  this.getAllutlisateurs()
  console.log(this.utilisateurs)
}
delete(id:any){
  this.service.deleteUtilisateur(id).subscribe()
  this._coreSevise.openSnackBar('Utilisateur  Supprimer','Termine')
   
  this.getAllutlisateurs()
}
toupdate(id:any){
  this.router.navigate(["modif-utilisateur-admin",id])
}
  

searchTerm: string="";


filterData() {

    
  if (this.searchTerm) {
     this.utilisateurs = this.utilisateurs.filter((item => {
       // Convertir chaque propriété de l'objet en chaîne de caractères et rechercher le terme de recherche
       return Object.values(item).some(value =>
         String(value).toLowerCase().includes(this.searchTerm.toLowerCase())
       );
        } ))
   } 
   else{
    this.getAllutlisateurs()
   }
 }
}
