import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { CoreService } from '../core/core.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {
  constructor( private route :Router,private link:ServiceService, private _coreSevise:CoreService,private _dialog:MatDialog){}



  nom=localStorage.getItem('nom')
  prenom=localStorage.getItem('prenom')

  email=localStorage.getItem('email')
  role=localStorage.getItem('role')
Password=localStorage.getItem('motdepasse')


  openBande(){
    const dialogRef= this._dialog.open(CompteComponent);
     dialogRef.afterClosed().subscribe({
     
     });
   }

close(){
  this._dialog.closeAll()
}
}
