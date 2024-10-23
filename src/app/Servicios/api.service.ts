import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // apis de logo

  createLogo(avatar:any){
    let avt = new FormData();
    avt.append('avatar', avatar)
    return this.http.post('http://localhost:3000/avatar/create', avt)
  }

  getAvatar(id:any){
    return this.http.get('http://localhost:3000/avatar/obtenerAll/'+id)
  }

  // apis de user

  createUser(apodo:any, email:any, password:any, avatar_id:any, descripcion:any){
    return this.http.post('http://localhost:3000/user/create',{
      apodo:apodo,
      email: email,
      password: password,
      avatar_id: avatar_id,
      descripcion:descripcion
    })
  }

  login(password: any, email:any){
    return this.http.post('http://localhost:3000/user/login',{
      email:email,
      password: password
    })
  }

  updateUser(id: any, avatar_id:any, apodo: any, descripcion: any){
    return this.http.put('http://localhost:3000/user/update/'+id,{
      avatar_id: avatar_id,
      apodo: apodo,
      descripcion:descripcion
    })
  }

  busqueda(criterio:any){
    return this.http.get('http://localhost:3000/user/busqueda/'+criterio)
  }

  // apis de friends

  createFriends(user_id:any, friend_id:any){
    return this.http.post('http://localhost:3000/friends/create',{
      user_id:user_id,
      friend_id: friend_id
    })
  }

  getFriends(id:any){
    return this.http.get('http://localhost:3000/friends/obtener/'+id)
  }

  updateFriend(id: any, apodo: any){
    return this.http.put('http://localhost:3000/friends/update/'+id, {apodo: apodo})
  }
}
