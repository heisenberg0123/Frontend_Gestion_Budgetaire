import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
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
import { ModifListCapexAdminComponent } from '../modif-list-capex-admin/modif-list-capex-admin.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CoreService } from '../core/core.service';
import { xml2js } from 'xml-js';
@Component({
  selector: 'app-liste-capex',
  templateUrl: './liste-capex.component.html',
  styleUrls: ['./liste-capex.component.css']
})
export class ListeCapexComponent {
  filteredData: any=[];
  searchTerm: string="";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('deleteCapex') deleteCapex!:TemplateRef<Capex>
  constructor( private router :Router,private service:ServiceService,private _dialog:MatDialog,
    private _coreSevise:CoreService){

  }
  fact:any=[]
  openDeleteProductDialog(id:any){

    this.fact

    this._dialog.open(this.deleteCapex)
    this.service.getCapexByid(id).subscribe(res => {

      this.fact=res



    })
    this.getAllCapex()
  }

  closeDialog(){
    this._dialog.closeAll()
    this.getAllCapex()
  }
  opencapex(){
   const dialogRef= this._dialog.open(AdminAddCapexComponent);
    dialogRef.afterClosed().subscribe({
      next:(val) => {
if(val){
  this.getAllCapex()
}
      },
    });
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
  
  goTomodifcapex(){
    this.router.navigate(["/modif-list-capex-admin"])
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
  if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="Manager"){
    this.v=false
  }
  else{
    this.v=true
  }
  if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="Lead"){
    this.q=false
  }

  else{
    
    this.q=true



  }
}

  
  filterData() {

    
    if (this.searchTerm) {
       this.capex = this.capex.filter(item => {
         // Convertir chaque propriété de l'objet en chaîne de caractères et rechercher le terme de recherche
         return Object.values(item).some(value =>
           String(value).toLowerCase().includes(this.searchTerm.toLowerCase())
         );
       });
     } 
     else{
       this.getAllCapex()
     }
   }
  value:String=""
  capex:Capex[]=[]
  form:FormGroup=new FormGroup({
    libelleArticle :new FormControl("omar")

  })
  get libelleArticle(){
    return this.form.get('libelleArticle')?.value
  }

  
  change(){
    this.getAllCapex()
  }
  getAllCapex(){
    this.service.getCapex().subscribe(response => {
      this.capex=response
      console.log(this.capex)

    })
  }

  vv(){
   
    if(localStorage.getItem('email')==null)
    { 
      this.router.navigate(['/login'])}
  
  
  }
  ngOnInit():void{
    this.vv()
    this.getAllCapex()
    this.verify()
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
  delete(id:any){
    
      this.service.deleteProjectsByCapex(id).subscribe(()=>{
  
      })
      this.getAllCapex()

      this.service.deleteFactByCapex(id).subscribe(()=>{
  
      })
      this.getAllCapex()
  
      this.service.deleteBandeByCapex(id).subscribe(()=>{
        
  
      })
  
      this.getAllCapex()
  
      this.service.deleteCapex(id).subscribe(()=>{
        console.log("Good")


      })
      this.getAllCapex()
  
  
      
      this._coreSevise.openSnackBar('Capex Supprimer','done')
      this.getAllCapex()



    
 

  
  }
    
 
  toupdate(id:any){
    this.router.navigate(["modif-list-capex-admin",id])
  }
  openEdit(id:any){
    this._dialog.open(ModifListCapexAdminComponent, {
      id,
    });
  }
}

