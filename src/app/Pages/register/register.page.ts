import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Servicios/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }



  ngOnInit() {
  }

  validatorPassword(primeraP:any, segundaP:any){
    if(primeraP===segundaP){
      return true
    }else{
      return false
    }
  }


  pasar(email:any, passwordP: any, passwordS:any){
    const vp = this.validatorPassword(passwordP, passwordS);

    if(vp){
      localStorage.setItem('emailU', email);
      localStorage.setItem('passwordU', passwordP)

      console.log('Ya pasaste');
      this.router.navigate(['/'])
    }else{
      console.log('Las password no coinciden');
    }
  }

}
