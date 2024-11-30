import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ServiceService } from '../services/service.service';
import { Credentials } from '../models/credentials';
import { Utilisateurs } from '../models/utilisateurs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router: Router,private service:ServiceService){

}
form = new FormGroup({
  email: new FormControl(),
  password: new FormControl(),
});
 get email():string{
  return this.form.get('email')?.value
}
get passwoard():string{
  return this.form.get('password')?.value
}
ngOnInit():void{
 
}


 

login(){
  let c:Credentials=new Credentials(this.email,this.passwoard)
  console.log(this.email)
  console.log(this.passwoard)
  this.service.login(c).subscribe(res=>{
    let k:any=res
    localStorage.setItem("email",k.email)
    localStorage.setItem("nom",k.nom)
    localStorage.setItem("prenom",k.prenom)
    localStorage.setItem("role",k.role)
    localStorage.setItem("motdepasse",k.motdepasse)


    if(localStorage.getItem("email")!=null){
      this.router.navigate(["/home-admin"])
    }
  })
  
}

}
  