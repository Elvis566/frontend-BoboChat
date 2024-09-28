import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createLogo(avatar:any){
    let avt = new FormData();
    avt.append('avatar', avatar)
    return this.http.post('http://localhost:3000/avatar/create', avt)
  }

  getAvatar(id:any){
    return this.http.get('http://localhost:3000/avatar/obtenerAll/'+id)
  }
}
