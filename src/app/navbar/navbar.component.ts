import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  innerWidth: number;
  weatherNow: string = "";
  weatherDescription: string = "";
  temperatureHigh: string = "";
  temperatureLow: string = "";
  temperatureNow: string = ""
  pendingRequest: boolean = false;
  userName: string;
  username: any;
  location: string;
  inventory: Object[];
  logoutSuccessMsg: string = "You Have Been Succcessfully Logged Out...";
  logOutSuccessful: boolean = false;
  loggedIn: boolean = true;
  smallestRoseLogo: boolean = false;
  largeRoseLogo: boolean = false;
  largestRoseLogo: boolean = false;
  weatherInfoDesktop: boolean = false;
  weatherInfo2: boolean = false;
  weatherInfoHidden: boolean = false;
  weatherInfo3Hidden: boolean = true;
  brandMobile: boolean = false;
  brandMobileIphoneX: boolean = false;
  brandFullScreen: boolean = true;
  brandMobileLandScape: boolean = false;
  brandMobileLandScapeIphoneX: boolean = false;
  removeBrand: boolean = false;

  divUnderlineOpen: boolean = false;
  removeWeatherQuickly: boolean = false;
  removeDesktopWeatherInfo: boolean = false;
  subcontractorObject: Object;
  subContractorArray: Object[];
  arrayOfOrderedItems: Number[];
  ngOnInit(): void {
  }

}
