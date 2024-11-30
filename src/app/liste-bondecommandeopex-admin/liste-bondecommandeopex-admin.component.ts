import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { Bondecommande } from '../models/bondecommande';
import { FormControl, FormGroup } from '@angular/forms';
import { Opex } from '../models/opex';
import { Bondecommandeo } from '../models/bondecommandeo';
import { MatDialog } from '@angular/material/dialog';
import { BondeommandeopexAdminComponent } from '../bondeommandeopex-admin/bondeommandeopex-admin.component';
import { CoreService } from '../core/core.service';
import { Projets } from '../models/projets';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-liste-bondecommandeopex-admin',
  templateUrl: './liste-bondecommandeopex-admin.component.html',
  styleUrls: ['./liste-bondecommandeopex-admin.component.css']
})
export class ListeBondecommandeopexAdminComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('deleteCapex') deleteCapex!:TemplateRef<any>
  constructor(private router :Router,private service:ServiceService, private _dialog:MatDialog,private _coreSevise:CoreService){

  }
  fact:any=[]

  openDeleteProductDialog(id:any){

    this.fact

    this._dialog.open(this.deleteCapex)
    this.service.getBondecommandeoByid(id).subscribe(res => {

      this.fact=res



    })
    this.getBande()
  }


  closeDialog(){
    this._dialog.closeAll()
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


  v=true
  verif=true
  q=true
verify(){

  if(localStorage.getItem("role")=="admin"){
    this.verif=false
  }
else{
  this.verif=true

}
 if(localStorage.getItem("role")=="admin" ||localStorage.getItem("role")=="Financé") {
    this.v=false
  }
  else{
    this.v=true

  }
 if(localStorage.getItem("role")=="admin" ||localStorage.getItem("role")=="Lead") {
    this.q=false
  }
  
  else{
    this.q=true



  }
}


  openBande(){
    const dialogRef= this._dialog.open(BondeommandeopexAdminComponent);
     dialogRef.afterClosed().subscribe({
       next:(val) => {
 if(val){
   this.getBande()
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
  value=0
  k=0
  bondecommandeo:Bondecommandeo[]=[]
  form:FormGroup=new FormGroup({
    fournisseur :new FormControl("omar")

  })
  get fournisseur(){
    return this.form.get('fournisseur')?.value
  }

  takeValue(){
   let filterdBondecommandeo:Bondecommandeo[]=[]
    let k=this.fournisseur
   this.bondecommandeo.forEach(element => {
    if(element.ref==k){
      filterdBondecommandeo.push(element)
    }    
   });
    this.bondecommandeo=filterdBondecommandeo
  }
  change(){
    this.getBande()
  }
  Bondecommandeo:any=[]
  filteredData: any=[];
  Opex:any=[]
  rst:any=[]
  getBande(){
    this.service.getBondecommandeo().subscribe((response)=>{
      this.Bondecommandeo=response
      
     
      this.service.getOpex().subscribe(opex => {
        this.Bondecommandeo.forEach((order: { opex: Opex | undefined; idOpex: number | undefined; }) => {
          order.opex = opex.find(o => o.id === order.idOpex);
        });

    })
   
   
   
   
  })}
  getOpex(){
    this.service.getOpex().subscribe((response)=>{
      this.Opex=response
      console.log(this.Opex)
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

this.getBande()
  console.log(this.Bondecommandeo)
}
toupdate(id:any){
  this.router.navigate(["modif-list-bondeopexadmin",id])
} 










delete(id:any){


  this.service.getProjetsBybande(id).subscribe((res:any)=>{
    let p:any=res
    	
   this.service.deleteProjetsByBonde(id).subscribe()
   this.service.createProjets(new Projets("active",p[0].idOpex)).subscribe()
     this.getBande()
  this.service.deleteFactByBondeo(id).subscribe(()=>{
    
  })
  this.getBande()

  this.service.deleteBondecommandeo(id).subscribe(()=>{
    console.log("Good")

  })
  this.getBande()

  this._coreSevise.openSnackBar('Bonde Commande Supprimer','done')
   
  this.getBande()
  
  })
}









searchTerm: string="";
filterData() {

  if (this.searchTerm) {
     this.Bondecommandeo = this.Bondecommandeo.filter((item: { [s: string]: unknown; } | ArrayLike<unknown>) => {
       // Convertir chaque propriété de l'objet en chaîne de caractères et rechercher le terme de recherche
       return Object.values(item).some(value =>
         String(value).toLowerCase().includes(this.searchTerm.toLowerCase())
       );
     });
     
   } 
   else{
     this.getBande()
   }
 }
}
