import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ContractorComponent } from './contractor/contractor.component';
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
  updateLocationContractor(contractorname):Observable<any>{

    let data = contractorname;
    return this.http.post<any>('http://localhost:3000/locations/updatecontractor/', data)

  }
  getLocation(locationname):Observable<any>{
    let data =""
    return this.http.put<any>('http://localhost:3000/locations/getlocation/'+locationname,locationname)

  }
  deleteLocation(location):Observable<any>{

    let data = location;
    return this.http.post<any>('http://localhost:3000/locations/deletelocation/',data)

  }
  getClient(clientname):Observable<any>{

    let data = clientname;
    return this.http.put<any>('http://localhost:3000/clients/'+data,data)

  }
  createClient(client):Observable<any>{

    let data = client;
    return this.http.post<any>('http://localhost:3000/clients/create',data)

  }
  getContractor(contractorname):Observable<any>{

    let data = contractorname;

      return this.http.put<any>('http://localhost:3000/contractors/getcontractor/'+data,data)

  }
  getContractors():Observable<any>{
    let data = ""
    return this.http.put<any>('http://localhost:3000/contractors/',data);

  }
  createContractor(contractor:any):Observable<any>{

    return this.http.post<any>('http://localhost:3000/contractors/create',contractor)

  }
  /*
  getClient(data:any) :Observable<any>{

    return this.http.put<any>('http://localhost:3000/clients/'+data,data)
  }
  */

}
