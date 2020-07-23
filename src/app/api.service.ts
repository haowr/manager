import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  authToken: any;
  user: any;
  public userName: any;
  isLoggedIn: boolean;
  addContractor(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/clients/create',data)
  }
  
  
  addLocation(data:any):Observable<any>{

      return this.http.post<any>('http://localhost:3000/locations/create',data)

  }
  getLocations():Observable<any>{
    let data =""
    return this.http.put<any>('http://localhost:3000/locations',data)

  }
  getLocation(locationname):Observable<any>{
    let data =""
    return this.http.put<any>('http://localhost:3000/locations/getlocation/'+locationname,locationname)

  }
  getClient(data:any) :Observable<any>{

    return this.http.put<any>('http://localhost:3000/clients/'+data,data)
  }
}
