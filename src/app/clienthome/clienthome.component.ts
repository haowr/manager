import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.css']
})
export class ClienthomeComponent implements OnInit {

  constructor( private router: Router,
               private route: ActivatedRoute,
               private api: ApiService) { }

               lineChartData: ChartDataSets[] = [
                { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
              ];
            
              lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
            
              lineChartOptions = {
                responsive: true,
              };
            
              lineChartColors: Color[] = [
                {
                  borderColor: 'black',
                  backgroundColor: 'rgba(255,255,0,0.28)',
                },
              ];
            
              lineChartLegend = true;
              lineChartPlugins = [];
              lineChartType = 'line';
              
  clientArray:Array<any> = [

  ]
  contractorArray:Array<any> =[

    { 
      contractorname:"Select A Contractor..." 
    }

  ]

  createNewLocation:boolean = false;
  locationListOpen:boolean = false;
  contractorListOpen:boolean = false;
  selectedContractor: string = "";
  loadingClients:boolean = true;
  loadingLocation:boolean = false;
  loadingContractor:boolean = false; 
  clientSelected:boolean = false;
  currentLocation:object = {};
  currentClient:String = this.route.params['_value'].clientname
  currentAddress:String = "";
  currentPhone:String = "";
  currentEmail:String = "";
  clientHomeHomeOpen:boolean = true;
  clientLocationsOpen:boolean = false;
  deleteButtonActivated:boolean = false;
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
  clientExpenditurePageOpen:boolean = false;
  contractorForLocation:object = {
                                    contractor:""

                                  };
                    
  fieldCannotBeEmptyMsg:string = "Field Cannot Be Empty....";

  openExpendituresPage(){

    if(!this.clientExpenditurePageOpen){

      this.clientExpenditurePageOpen = true;
      this.clientHomeHomeOpen = false;
      this.clientLocationsOpen = false;

    }{

    }

  }
  openLocationList(){

    this.contractorArray  =[
  
      {
        contractorname:"Select A Contractor..."
      }
  
    ]
    if(!this.locationListOpen){

      this.loadingClients = true;
      this.clientLocationsOpen = true;
      this.locationListOpen = true;
      this.clientHomeHomeOpen = false;
      this.contractorListOpen = false;
      this.createNewLocation = false;
      this.clientExpenditurePageOpen = false;
        
      this.api.getLocations().subscribe((data)=>{

          console.log(data)

          this.clientArray = data.locations;
          let contractorlist = [{}]

          this.api.getContractors().subscribe((data)=>{

            for(let i = 0; i <= this.clientArray.length; i++){
      

              //for(let i =0; i <= data.contractors.length; i ++){
                   //this.clientArray[i].contractorlist[0]={}
              
                  // this.clientArray[i].contractorlist = data.contractors

             // }


            }
            for(let z=0; z< data.contractors.length; z++){
              console.log(this.contractorArray)
              console.log("data.contractors",data.contractors[z])
              this.contractorArray.push(data.contractors[z])
   
            }
            console.log(this.contractorArray)

          })


          setTimeout(()=>{
            
            this.loadingClients = false;

          },3000)
    
    
        })

    }else{

    }

  }
  openContractorList(){

    if(!this.contractorListOpen){

      this.contractorListOpen = true;
      this.locationListOpen = false;
      this.clientHomeHomeOpen = false;
      this.clientExpenditurePageOpen = false;

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
  addContractorToLocation(locationname,contractorname){

    console.log("selectedContractor",this.selectedContractor)    
    let contractor = this.selectedContractor
    let updatedLocation = {}
    let retrievedContractor = {}
    this.loadingContractor = true;
    this.api.getContractor(contractor).subscribe((data)=>{

      console.log("GETCONTRACTOR")
      console.log("data.contractor",data.contractor)
      retrievedContractor = data.contractor;

      this.api.getLocation(locationname).subscribe((data)=>{

          console.log("data.locations", data.locations)
          console.log("retrievedContractor", retrievedContractor)
          data.locations.contractor = retrievedContractor
          retrievedContractor.locationname = data.locations.location;
          

          this.api.updateLocationContractor(retrievedContractor).subscribe((data)=>{

            console.log("data.location", data)
            this.loadingClients = true;

            this.api.getLocations().subscribe((data)=>{

              console.log(data)
              this.clientArray = data.locations

              this.api.getContractors().subscribe((data)=>{

                for(let i = 0; i <= this.clientArray.length; i++){
          
    
                  for(let i =0; i <= data.contractors.length; i ++){
    
                       this.clientArray[i].contractorlist = data.contractors
    
                  }
    
    
                }
    
              })
 
             
    
              setTimeout(()=>{
                
                this.loadingClients = false;
                this.loadingContractor = false;
    
              },3000)
        
        
            })
          })
  
      })
      this.getClient()

  })
  }
  getContractors(){

      this.api.getContractors().subscribe((data)=>{

        console.log(data)
        //this.contractorArray = data.contractors;
        for(let i=0; i<= data.contractors.length; i++){

           this.contractorArray[i+1].push(data.contractors[i])

        }

      })
  }
  deleteContractor(){



  }
  createContractor(){

    let contractor = {

      contractorname: "Dogast",
      contractorphone: "999-999-9999",
      contractoremail: "rg@gmail.com",
      contractoraddress: "53 Billmain St.",
      contactname: "WILL ANDERSON",
      contactphone:"888-988-9999",
     
      expenditures:"$100.00"

    }
    this.api.createContractor(contractor).subscribe((data)=>{

      console.log(data)

    })

  }
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
  optionFunction(){

    console.log(this.contractorArray)

  }
  deleteLocation(){

    this.loadingClients = true;

    this.api.deleteLocation(this.currentLocation).subscribe((data)=>{

      console.log(data)
      
      this.clientArray = data.locations;
      setTimeout(()=>{

        this.loadingClients = false;

      },2000)
      this.loadingClients = false;


    })

  }
  selectLocation(location,index){

    console.log(location)
    this.currentLocation = location;
    
    if(!location[index]){
      location[index] = true;
      this.deleteButtonActivated = true;
    }else{
      location[index] = false;
      this.deleteButtonActivated = false;
    }

  }
  startLoading(){

    setTimeout(()=>{

      this.loadingClients = false;

     },4000)

  }
  openClientHomeHome(){

      if(!this.clientHomeHomeOpen){

        this.clientHomeHomeOpen = true;
        this.locationListOpen = false;
        this.clientLocationsOpen = false;
        this.clientExpenditurePageOpen = false;

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
  createClient(){

    let Client = {

      clientname:     "Superstore",
      clientaddress:  "888 Richards Rd.",
      clientemail:    "rrsuperstore@superstore.ca",
      clientphone:    "888-888-8888",
      contactname:    "Fracis Wright",
      contactemail:   "fwright@gmail.com",
      contactphone:   "999-999-9999"

    }

    this.api.createClient(Client).subscribe((data)=>{

      console.log(data.client)
      //this.currentAddress = data.client.clientaddress;
      //this.currentClient = data.client.clientname;
      //this.currentEmail = data.client.clientemail;
      //this.currentPhone = data.client.clientphone;

    })

  }
  ngOnInit(): void {

      this.startLoading()
      //this.createClient()
      this.getClient()
     // this.getContractors()
      //this.createClient()
      //this.newLocation()
      //this.createContractor()
      console.log("PARAMMAP")
      console.log(this.route.params['_value'].clientname)
  }

}
