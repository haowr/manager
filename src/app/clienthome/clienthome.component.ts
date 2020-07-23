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
  loadingLocation:boolean = false;
  clientSelected:boolean = false;
  currentClient:String = this.route.params['_value'].clientname
  currentAddress:String = "";
  currentPhone:String = "";
  currentEmail:String = "";
  clientHomeHomeOpen:boolean = true;
  clientLocationsOpen:boolean = false;
  locationName: string = "";
  locationEmail: string = "";
  locationPhoneNumber: string = "";
  locationAddress: string =  "";
  locationContactName: string = "";
  locationContactEmail:string = "";
  locationContactPhoneNumber:string = "";
  locationContactAddress:string = "";
  locationAddressCannotBeEmpty:boolean = false;
  locationNameCannotBeEmpty:boolean = false;
  locationEmailCannotBeEmpty:boolean = false;
  locationPhoneNumberCannotBeEmpty:boolean = false;
  locationContactNameCannotBeEmpty:boolean = false;
  locationContactEmailCannotBeEmpty:boolean = false;
  locationContactPhoneNumberCannotBeEmpty:boolean = false;
  locationContactAddressCannotBeEmpty:boolean = false;
  fieldCannotBeEmptyMsg:string = "Field Cannot Be Empty....";

  getClient(){

      this.api.getClient(this.route.params['_value'].clientname).subscribe((data)=>{

      console.log(data)
      this.currentClient = data.client.clientname;
      this.currentAddress = data.client.clientaddress;
      this.currentPhone = data.client.clientphone;
      this.currentEmail = data.client.clientemail;



      })

  }

  submitLocation(){

    if(this.locationName == ""){

      this.locationNameCannotBeEmpty = true;

      setTimeout(()=>{

        this.locationNameCannotBeEmpty = false;

      },4000)


    }
    if(this.locationAddress == ""){

      this.locationAddressCannotBeEmpty = true;

      setTimeout(()=>{

        this.locationAddressCannotBeEmpty = false;

      },4000)

    }
    if(this.locationEmail == ""){

      this.locationEmailCannotBeEmpty = true;

      setTimeout(()=>{

        this.locationEmailCannotBeEmpty = false;

      },4000)


    }
    if(this.locationPhoneNumber == ""){

      this.locationPhoneNumberCannotBeEmpty = true;

      setTimeout(()=>{

        this.locationPhoneNumberCannotBeEmpty = false;

      },4000)


    }
    if(this.locationContactName == ""){

      this.locationContactNameCannotBeEmpty = true;

      setTimeout(()=>{

        this.locationContactNameCannotBeEmpty = false;

      },4000)

    }
    if(this.locationContactAddress == ""){

      this.locationContactAddressCannotBeEmpty = true;

      setTimeout(()=>{

        this.locationContactAddressCannotBeEmpty = false;

      },4000)


    }
    if(this.locationContactEmail == ""){

      this.locationContactEmailCannotBeEmpty = true;

      setTimeout(()=>{

        this.locationContactEmailCannotBeEmpty = false;

      },4000)


    }
    if(this.locationContactPhoneNumber == ""){

      this.locationContactPhoneNumberCannotBeEmpty = true;

      setTimeout(()=>{

        this.locationContactPhoneNumberCannotBeEmpty = false;

      },4000)


    }


    if(this.locationName !== "" &&
       this.locationPhoneNumber !== "" &&
       this.locationEmail !== "" &&
       this.locationAddress !== "" &&
       this.locationContactName !== "" &&
       this.locationContactPhoneNumber !== "" &&
       this.locationContactEmail !== "" &&
       this.locationContactAddress !== ""){

        this.loadingLocation = true;

        let location = {

          location: this.locationName,
          locationPhoneNumber: this.locationPhoneNumber,
          locationEmail: this.locationEmail,
          locationAddress: this.locationAddress,
          locationContactName: this.locationContactName,
          locationContactPhoneNumber: this.locationContactPhoneNumber,
          locationContactEmail: this.locationContactEmail,
          client: {

              clientname:   this.currentClient,
              clientemail:  this.currentEmail,
              clientaddress:  this.currentAddress,
              clientphone: this.currentPhone 
          }

        }

        console.log("this.locationName",this.locationName)
        console.log("this.locationPhoneNumber",this.locationPhoneNumber)
        console.log("this.locationEmail",this.locationEmail)
        console.log("this.locationAddress",this.locationAddress)
        console.log("this.locationContactName",this.locationContactName)
        console.log("this.locationContactPhoneNumber",this.locationPhoneNumber)
        console.log("this.locationContactEmail",this.locationContactEmail)
        console.log("this.locationContactAddress",this.locationContactAddress)
        console.log("location", location)

        this.api.addLocation(location).subscribe((data)=>{

            setTimeout(()=>{

              this.locationName = "";
              this.locationPhoneNumber = "";
              this.locationEmail = "";
              this.locationAddress = "";
              this.locationContactName = "";
              this.locationContactPhoneNumber = "";
              this.locationContactEmail = "";
              this.locationContactAddress = "";
              this.loadingLocation = false;

            },3000)
            
        })

       }



  }

  openLocationList(){

    if(!this.locationListOpen){

      this.loadingClients = true;
      this.locationListOpen = true;
      this.clientHomeHomeOpen = false;
      this.createNewLocation = false;
        
      this.api.getLocations().subscribe((data)=>{

          console.log(data)
          this.clientArray = data.locations;

          setTimeout(()=>{
            
            this.loadingClients = false;

          },3000)
    
    
        })

    }else{

    }

  }
  goBackToLocationList(){


    if(this.createNewLocation){

      this.createNewLocation = false;
      this.locationListOpen = true;

    }else{
      
      //this.locationListOpen = false;

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

 
    if(!this.clientLocationsOpen){

        this.clientLocationsOpen = true;
        this.clientHomeHomeOpen = false;
        this.openLocationList()

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
