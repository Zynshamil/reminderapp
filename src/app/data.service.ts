import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  headers:new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  
   // login
   login(email:any,password:any) {
    // user entered acno n password
      const data={
        email,
        password
      }
    return this.http.post('http://localhost:3000/login',data)
    } 

     // Register
   register(email:any,uname:any,password:any) {
    // user entered acno n password
      const data={
        email,
        uname,
        password
      }
    return this.http.post('http://localhost:3000/register',data)
    } 
    // Dashboard
     dashboard(email:any,date:any,description:any){
      const data={
        email,
        date,
        description
      }
      return this.http.post('http://localhost:3000/dashboard',data,this.getOptions())
     }

     getOptions(){
      // to fetch token from local storage
  const token=JSON.parse(localStorage.getItem("token")||'')

  // Create http header
  let headers= new HttpHeaders()
  // add token to req header
  if(token){
    headers=headers.append('x-access-token',token)
    options.headers=headers
  }
  return options
  }

  // viewEvent

 viewevent(email:any){
  const data={
    email
  }
  return this.http.post('http://localhost:3000/viewevent',data,this.getOptions()) 
}
  
     
}
