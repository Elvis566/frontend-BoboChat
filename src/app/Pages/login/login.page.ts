import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Servicios/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private apiS: ApiService, private router:Router) { }

  ngOnInit() {
  }

  login(password: any, email:any){
    this.apiS.login(password.value, email.value).subscribe({
      next:(data:any)=>{
        localStorage.setItem('userId', data.user.id);
        localStorage.setItem('apodoUser', data.user.apodo);
        localStorage.setItem('descripcionUser', data.user.descripcion);
        localStorage.setItem('avatarIdUser', data.user.avatar_id);

        this.router.navigate(['/home']);
        
      },error:(e:any)=>{
        console.log(e);
      }
    })
  }

}
