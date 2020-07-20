import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.css']
})
export class ClienthomeComponent implements OnInit {

  constructor( private router: Router,
               private route: ActivatedRoute,
               private api: ApiService) { }


  clientArray:object = [

  ]
  createNewLocation:boolean = false;
  locationListOpen:boolean = true;
  loadingClients:boolean = true;
  clientSelected:boolean = false;
  currentClient:String = this.route.params['_value'].clientname
  currentAddress:String = "";
  currentPhone:String = "";
  currentEmail:String = "";
  clientHomeHomeOpen:boolean = true;
  clientLocationsOpen:boolean = false;

  getClient(){


    this.api.getClient(this.route.params['_value'].clientname).subscribe((data)=>{

      console.log(data)
      this.currentClient = data.client.clientname;
      this.currentAddress = data.client.clientaddress;
      this.currentPhone = data.client.clientphone;
      this.currentEmail = data.client.clientemail;



    })

  }

  openLocationList(){

    if(!this.locationListOpen){

        this.locationListOpen = true;
        this.createNewLocation = false;

    }else{

      
      

    }

  }

  openCreateNewLocationPage(){

    if(!this.createNewLocation){

      this.createNewLocation = true;
      this.locationListOpen = false;

    }else{

      
      

    }


  }
  selectClient(client){

    console.log(client)
    //console.log("clientname",client.companyname)
    if(!this.clientSelected){

      this.clientSelected = true;

    }else{

      this.clientSelected = false;

    }
    //this.router.navigate(['/clients/'+client.clientname])

  }
  startLoading(){

    setTimeout(()=>{

      this.loadingClients = false;

     },4000)

  }
  openClientHomeHome(){

      if(!this.clientHomeHomeOpen){

        this.clientHomeHomeOpen = true;
        this.clientLocationsOpen = false;

      }else{

        //this.clientHomeHomeOpen = false;

      }

  }
  openClientLocations(){

    this.api.getLocations().subscribe((data)=>{

      console.log(data)
      this.clientArray = data.locations;


    })


    if(!this.clientLocationsOpen){

        this.clientLocationsOpen = true;
        this.clientHomeHomeOpen = false;

    }else{

        //this.clientLocationsOpen = false;
        //this.clientHomeHomeOpen = true;

    }

  }
  getClientLocation(locationname){

    this.router.navigate(['/clients/locations/'+locationname])


  }
  newLocation(){

    let newLocation ={

        "location": "DG10000",
        "client": {
          "clientname": "Dogast",
          "contactname": "Brilliant Styles",
          "clientaddress": "18374-77Ave",
          "clientemail": "dogast@gmail.com",
          "contactemail": "brilliance@gmail.cm",
          "clientphone": "666-666-6666",
          "contactphone": "555-555-5555",
          "productcode": "120000",
          "expenditures": "$54.00"
        },
        "contractor": {
          "contractorname": "Dogast",
          "contactname": "Brilliant Styles",
          "contractoraddress": "18374-77Ave",
          "contractoremail": "dogast@gmail.com",
          "contactphone": "555-555-5555",
          "productcode": "120000",
          "expenditures": "$54.00"
        },
        "locationaddress": "16689-77 Ave",
        "locationphone": "555-555-5555",
        "locationemail": "dgstoneyplain@gmail.com",
        "contactphone": "222-222-2222",
        "contactemail": "d.melech@gmail.com",
        "contactname": "David Melech",
        "inventory" :{},
        "expenditures": "54.00"

    }

    this.api.addLocation(newLocation).subscribe((data)=>{

        console.log(data)

    })


  }

  getRouteParams(){

    //console.log(this.router.params)

  }

  ngOnInit(): void {

      this.startLoading()
      this.getClient()
      this.newLocation()
      console.log("PARAMMAP")
      console.log(this.route.params['_value'].clientname)
  }

}
