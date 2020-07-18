import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: ApiService) { }

  currentLocation: String = "";
  currentLocationAddress: String = "";
  currentLocationPhone: String = "";
  currentLocationEmail:String = "";
  currentAddress:String = "";
  currentClient:String = "";
  currentPhone:String ="";
  currentEmail:String = "";
  loadingLocation: boolean = false;
  loadingClients:boolean = false;
  registrationFailMsg:String = "";



  getClientLocation(){


    this.api.getLocation(this.route.params['_value'].locationname).subscribe((data)=>{

        console.log(data)
        setTimeout(()=>{

          this.currentLocation = data.locations.location;
          this.currentLocationAddress =data.locations.locationaddress
          this.currentLocationEmail = data.locations.locationemail
          this.currentLocationPhone = data.locations.locationphone
          this.loadingLocation = false;


        },2000)



    })
    //(['/clients/locations/'+this.route.params['_value'].clientname])


  }
  ngOnInit(): void {

    this.getClientLocation()
  }

}
