import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { Bondecommande } from '../models/bondecommande';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Capex } from '../models/capex';
import { CoreService } from '../core/core.service';
import { BondecommandeaddComponent } from '../bondecommandeadd/bondecommandeadd.component';
import { Projects } from '../models/projects';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-liste-bondecommande-admin',
  templateUrl: './liste-bondecommande-admin.component.html',
  styleUrls: ['./liste-bondecommande-admin.component.css']
})
export class ListeBondecommandeAdminComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('deleteCapex') deleteCapex!:TemplateRef<any>
  filteredData: any=[];
searchTerm: string="";
  constructor(private router :Router,private service:ServiceService, private _coreSevise:CoreService,private _dialog:MatDialog){

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
  v=true
  q=true
verify(){
  if(localStorage.getItem("role")=="admin"){
    this.verif=false
  }
  else{
    this.verif=true

  }
  if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="Financé" ) {
    this.v=false
  }
  else{
    this.v=true

  }
   if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="Lead" ) {
    this.q=false
  }


  else{
    this.q=true



  }
}
fact:any=[]

  openDeleteProductDialog(id:any){

    this.fact

    this._dialog.open(this.deleteCapex)
    this.service.getBondecommandeByid(id).subscribe(res => {

      this.fact=res


      this.getBande()
    })
    this.getBande()
  }
  closeDialog(){
    this._dialog.closeAll()
  }

  openBande(){
    const dialogRef= this._dialog.open(BondecommandeaddComponent);
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
  bondecommande:Bondecommande[]=[]
  form:FormGroup=new FormGroup({
    fournisseur :new FormControl("omar")

  })
  
  Bondecommande:any=[]

Capex:any=[]
  rst:any=[]
  getBande(){
    this.service.getBondecommande().subscribe((response)=>{
      this.Bondecommande=response
      
     
      this.service.getCapex().subscribe(capex => {
        this.Bondecommande.forEach((order: { capex: Capex | undefined; idCapex: number | undefined; }) => {
          order.capex = capex.find(c => c.id === order.idCapex);
        });

    })
   
   
   
   
  })}
  capex:Capex[]=[]

  
  getCapex(){
    this.service.getCapex().subscribe((response)=>{
      this.Capex=response
      console.log(this.Capex)
    })
  }




  toupdate(id:any){
    this.router.navigate(["modif-list-bonde-admin",id])
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
  console.log(this.Bondecommande)
}
delete(id:any){
  
  this.service.getProjectsBybande(id).subscribe((res:any)=>{
    let p:any=res
    	
   this.service.deleteProjectsByBonde(id).subscribe()
   this.service.createProjects(new Projects("active",p[0].idCapex)).subscribe()
     this.getBande()
  this.service.deleteFactByBonde(id).subscribe(()=>{
    
  })
  this.getBande()

  this.service.deleteBondecommande(id).subscribe(()=>{
    console.log("Good")

  })
  this.getBande()

  this._coreSevise.openSnackBar('Bonde Commande Supprimer','done')
   
  this.getBande()
  
  })
 
 
}



    
   filterData() {

    if (this.searchTerm) {
       this.Bondecommande = this.Bondecommande.filter((item: { [s: string]: unknown; } | ArrayLike<unknown>) => {
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
