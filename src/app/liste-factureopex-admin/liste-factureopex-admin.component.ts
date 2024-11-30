import { Component, ElementRef, OnInit,TemplateRef,ViewChild } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { FormControl, FormGroup } from '@angular/forms';
import { Capex } from '../models/capex';
import { CoreService } from '../core/core.service';
import { FacturesaddAdminComponent } from '../facturesadd-admin/facturesadd-admin.component';
import { MatDialog } from '@angular/material/dialog';

import { Dialog } from '@angular/cdk/dialog';
import { FactureopexaddAdminComponent } from '../factureopexadd-admin/factureopexadd-admin.component';
import { Factureso } from '../models/factureo';
import { Opex } from '../models/opex';
import { Bondecommandeo } from '../models/bondecommandeo';
import { Projets } from '../models/projets';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import jsPDF from 'jspdf';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import * as pdfMake from "pdfmake/build/pdfmake";  import html2canvas from 'html2canvas';
const htmlToPdfmake = require("html-to-pdfmake");
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs
@Component({
  selector: 'app-liste-factureopex-admin',
  templateUrl: './liste-factureopex-admin.component.html',
  styleUrls: ['./liste-factureopex-admin.component.css']
})
export class ListeFactureopexAdminComponent implements OnInit {
  @ViewChild('showFacture') showFacture!:TemplateRef<any>;
  @ViewChild('pdfTable') pdfTable!:ElementRef
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('deleteCapex') deleteCapex!:TemplateRef<any>;
  constructor(private router :Router,private service:ServiceService,private _coreSevise:CoreService,private _dialog:MatDialog){

  }
  facto:any=[]
  fact:any=[]

  openDeleteProductDialog(id:any){

    this.fact

    this._dialog.open(this.deleteCapex)
    this.service.getFacturesoByid(id).subscribe(res => {

      this.fact=res



    })
    this.getBande()
  }

  closeDialog(){
    this._dialog.closeAll()
    this.getBande()
  }
  show(id:any){
  
   
    this.fact
    this._dialog.open(this.showFacture);
this.service.getFacturesoByid(id).subscribe(res=>{
  this.fact=res
  console.log(this.fact)
    
  this.service.getOpex().subscribe(opex => {
    this.fact.forEach((order: { opex: Opex | undefined; idOpex: number | undefined; }) => {
      order.opex = opex.find(o => o.id === order.idOpex);
    });

})

this.service.getBondecommandeo().subscribe(bondecommandeo => {
  this.fact.forEach((order: { bondecommandeo: Bondecommandeo | undefined; idBondecommadeo: number | undefined; }) => {
    order.bondecommandeo = bondecommandeo.find(bc => bc.id === order.idBondecommadeo);
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
verify(){
  if(localStorage.getItem("role")=="admin"){
    this.verif=false

  }
  if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="Financé")
  
  {
    this.v=false

  }
  
  else{
    this.v=true


  }

if( localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="Lead"){
this.q=false
}

else{
this.q=true


}

}



v=true
q=true


verf(){

  if(localStorage.getItem("role")=="admin" ) {
    this.v=false
  }

  else{
    this.v=true

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
    const dialogRef= this._dialog.open(FactureopexaddAdminComponent);
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
   factureso:Factureso[]=[]
   form:FormGroup=new FormGroup({
     fournisseur :new FormControl("omar")
 
   })
   get fournisseur(){
     return this.form.get('fournisseur')?.value
   }
 
  
   change(){
     this.getBande()
   }
   
  Factureso:any=[]
  Bondecommandeo:any=[]

Opex:any=[]
  rst:any=[]
  getBande(){
    this.service.getFactureso().subscribe((response)=>{
      this.Factureso=response
      
     
      this.service.getOpex().subscribe(opex => {
        this.Factureso.forEach((order: { opex: Opex | undefined; idOpex: number | undefined; }) => {
          order.opex = opex.find(o => o.id === order.idOpex);
        });

    })

    this.service.getBondecommandeo().subscribe(bondecommandeo => {
      this.Factureso.forEach((order: { bondecommandeo: Bondecommandeo | undefined; idBondecommadeo: number | undefined; }) => {
        order.bondecommandeo = bondecommandeo.find(bc => bc.id === order.idBondecommadeo);
      });

  })
   
   
   
   
  })}
  
  getOpex(){
    this.service.getOpex().subscribe((response)=>{
      this.Opex=response
      console.log(this.Opex)
    })
  }
  getBondeo(){
    this.service.getBondecommandeo().subscribe((response)=>{
      this.Bondecommandeo=response
      console.log(this.Bondecommandeo)
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
  console.log(this.Factureso)
}





delete(id:any){



 this.service.getProjetsByFact(id).subscribe((res)=>{
    let p:any=res
this.service.deleteProjetsByFact(id).subscribe()
this.service.createProjets(new Projets("active",p[0].idOpex,p[0].idBondecommadeo)).subscribe()


     this.getBande()
     this.service.deleteFactureso(id).subscribe(()=>{

     })
     this.getBande()

  })


  this._coreSevise.openSnackBar('Facture Supprimer','done')
   
  this.getBande()
}





toupdate(id:any){
  this.router.navigate(["modifFacturesOpex-admin",id])
}
  


searchTerm: string="";


filterData() {

    
  if (this.searchTerm) {
     this.Factureso = this.Factureso.filter((item: { [s: string]: unknown; } | ArrayLike<unknown>) => {
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
