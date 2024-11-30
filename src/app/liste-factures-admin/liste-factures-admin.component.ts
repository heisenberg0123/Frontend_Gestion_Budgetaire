import { Component,ViewChild,TemplateRef, ElementRef } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { Factures } from '../models/facture';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { CoreService } from '../core/core.service';
import { FacturesaddAdminComponent } from '../facturesadd-admin/facturesadd-admin.component';
import { MatDialog } from '@angular/material/dialog';
import { Bondecommande } from '../models/bondecommande';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Projects } from '../models/projects';
import jsPDF from 'jspdf';
const htmlToPdfmake = require("html-to-pdfmake");
import * as pdfMake from "pdfmake/build/pdfmake";  import html2canvas from 'html2canvas';


@Component({
  selector: 'app-liste-factures-admin',
  templateUrl: './liste-factures-admin.component.html',
  styleUrls: ['./liste-factures-admin.component.css']
})
export class ListeFacturesAdminComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('deleteCapex') deleteCapex!:TemplateRef<any>
  @ViewChild('showFacture') showFacture!:TemplateRef<any>;
  @ViewChild('pdfTable') pdfTable!:ElementRef
  constructor(private router :Router,private service:ServiceService,private _coreSevise:CoreService,private _dialog:MatDialog){

  }
  fact:any=[]
  openDeleteProductDialog(id:any){

    this.fact

    this._dialog.open(this.deleteCapex)
    this.service.getFacturesByid(id).subscribe(res => {

      this.fact=res



    })
    this.getBande()
  }


  

  closeDialog(){
    this._dialog.closeAll()
    this.getBande()
  }
  close(){
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
  if( localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="Financé"){
    this.v=false
  }
  else{

  }
    if( localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="Lead"){
    this.q=false
  }

  else{
    this.q=true


  }
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





  openBande(){
    const dialogRef= this._dialog.open(FacturesaddAdminComponent);
     dialogRef.afterClosed().subscribe({
       next:(val) => {
 if(val){
   this.getBande()
 }
       },
     });
   }





   
   value=0
   k=0
   factures:Factures[]=[]
   form:FormGroup=new FormGroup({
     fournisseur :new FormControl("omar")
 
   })
   get fournisseur(){
     return this.form.get('fournisseur')?.value
   }
 

   
  Factures:any=[]

Capex:any=[]
Bondecommande:any=[]

  rst:any=[]
  getBande(){
    this.service.getFactures().subscribe((response)=>{
      this.Factures=response
      
     
      this.service.getCapex().subscribe(capex => {
        this.Factures.forEach((order: { capex: Capex | undefined; idCapex: number | undefined; }) => {
          order.capex = capex.find(c => c.id === order.idCapex);
        });

    })
    this.service.getBondecommande().subscribe(bondecommande => {
      this.Factures.forEach((order: { bondecommande: Bondecommande | undefined; idBondecommade: number | undefined; }) => {
        order.bondecommande = bondecommande.find(bo => bo.id === order.idBondecommade);
      });

  })
   
   
   
   
  })}
  
  getCapex(){
    this.service.getCapex().subscribe((response)=>{
      this.Capex=response
      console.log(this.Capex)
    })
  }
    
  getBonde(){
    this.service.getBondecommande().subscribe((response)=>{
      this.Bondecommande=response
      console.log(this.Bondecommande)
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
  console.log(this.Factures)
}



delete(id:any){
  this.service.getProjectsByFact(id).subscribe((res)=>{
    let p:any=res
this.service.deleteProjectsByFact(id).subscribe()
this.service.createProjects(new Projects("active",p[0].idCapex,p[0].idBondecommade)).subscribe()


     this.getBande()
     this.service.deleteFactures(id).subscribe(()=>{

     })
     this.getBande()

  })


  this._coreSevise.openSnackBar('Facture Supprimer','done')
   
  this.getBande()
}




show(id:any){
  
   
  this.fact
  this._dialog.open(this.showFacture);
this.service.getFacturesByid(id).subscribe(res=>{
this.fact=res
console.log(this.fact)
  
this.service.getCapex().subscribe(capex => {
  this.fact.forEach((order: { capex: Capex | undefined; idCapex: number | undefined; }) => {
    order.capex = capex.find(o => o.id === order.idCapex);
  });

})

this.service.getBondecommande().subscribe(bondecommande => {
this.fact.forEach((order: { bondecommande: Bondecommande | undefined; idBondecommade: number | undefined; }) => {
  order.bondecommande = bondecommande.find(bc => bc.id === order.idBondecommade);
});

})




})


}
generatePDF(){
  const doc =new jsPDF();
const pdfTable = this.pdfTable.nativeElement;

var html = htmlToPdfmake(pdfTable.innerHTML);
const documentDefinition ={content:html};
pdfMake.createPdf(documentDefinition).open();
}


toupdate(id:any){
  this.router.navigate(["modifFactures-admin",id])
}
  
searchTerm: string="";


filterData() {

    
  if (this.searchTerm) {
     this.Factures = this.Factures.filter((item: { [s: string]: unknown; } | ArrayLike<unknown>) => {
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
