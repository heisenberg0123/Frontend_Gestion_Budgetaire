import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { Opex } from '../models/opex';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AdminAddOpexComponent } from '../admin-add-opex/admin-add-opex.component';
import { ModifListCapexAdminComponent } from '../modif-list-capex-admin/modif-list-capex-admin.component';
import { ModifListOpexAdminComponent } from '../modif-list-opex-admin/modif-list-opex-admin.component';
import { CoreService } from '../core/core.service';
import { TagContentType } from '@angular/compiler';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-opex',
  templateUrl: './list-opex.component.html',
  styleUrls: ['./list-opex.component.css']
})
export class ListOpexComponent implements OnInit {
  
  filteredData: any=[];
  searchTerm: string="";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('deleteCapex') deleteCapex!:TemplateRef<any>

  constructor(private router :Router,private service:ServiceService,private _dialog:MatDialog,private _coreSevise:CoreService ,
    ){

  }

  fact:any=[]

  openDeleteProductDialog(id:any){

    this.fact

    this._dialog.open(this.deleteCapex)
    this.service.getOpexByid(id).subscribe(res => {

      this.fact=res



    })
    this.getAllopex()
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
  if(localStorage.getItem("role")=="admin"  || localStorage.getItem("role")=="Manager"  ){
    this.v=false
  }
  else{
    this.v=true

  }
  if(localStorage.getItem("role")=="admin"  || localStorage.getItem("role")=="Lead"  ){
    this.q=false
  }

  else{
    this.q=true



  }
}
if( )
{

}
  filterData() {

    
   if (this.searchTerm) {
      this.opex = this.opex.filter(item => {
        // Convertir chaque propriété de l'objet en chaîne de caractères et rechercher le terme de recherche
        return Object.values(item).some(value =>
          String(value).toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    } 
    else{
      this.getAllopex()
    }
  }
  
  openopex(){
    const dialogRef= this._dialog.open(AdminAddOpexComponent);
     dialogRef.afterClosed().subscribe({
       next:(val) => {
 if(val){
   this.getAllopex()
 }
       },
     });
   }
   openEdit(id:any){
this._dialog.open(ModifListOpexAdminComponent,
{
  id,
}   )}
  opex:Opex[]=[]
  

  getAllopex(){
    this.service.getOpex().subscribe(response => {
      this.opex=response
      console.log(this.opex)

    })
  }

  vv(){
   
    if(localStorage.getItem('email')==null)
    { 
      this.router.navigate(['/login'])}
  
  
  }
  ngOnInit():void{
    this.vv()
    this.getAllopex()
    this.filteredData = this.opex; 
this.verify()
  }

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */ 
    const fileName = 'ExcelSheet.xlsx';
    XLSX.writeFile(wb, fileName);
 
  }
  delete(id:any){
    this.service.deleteProjectsByOpex(id).subscribe(()=>{

    })
    this.getAllopex()
    
this.service.deleteFactByOpex(id).subscribe(()=>{

})
this.getAllopex()
    
    this.service.deleteBandeByOpex(id).subscribe(()=>{

    })
    this.getAllopex()




this.service.deleteOpex(id).subscribe(()=>{

})
this.getAllopex()



    this._coreSevise.openSnackBar('Opex Supprmer','Terminé')
 
    this.getAllopex()
  }

  
  toupdate(id:any){
    this.router.navigate(["modif-list-opex-admin",id])
  }
}
