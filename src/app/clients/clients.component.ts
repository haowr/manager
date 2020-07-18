import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ApiService } from '../api.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private router: Router,
              private api: ApiService) { }

  clientArray:object = [

    {
    _id: "5f0eb856222a9a14fc7ac998",
    clientname: "Dogast",
    clientlocation: "108988-66 Ave",
    contactname: "Brilliant Styles",
    contactemail: "brilliance@gmail.cm",
    contactphone: "555-555-5555",
    productcode: "120000",
    assignedcontractor:"Simpson's Cleaning",
    expenditures: "$54.00",
    },
    {
      _id: "5f0eb856222a9a14fc7ac998",
      clientname: "Dogast",
      clientlocation: "108988-66 Ave",
      contactname: "Brilliant Styles",
      contactemail: "brilliance@gmail.cm",
      contactphone: "555-555-5555",
      productcode: "120000",
      assignedcontractor:"Simpson's Cleaning",
      expenditures: "$54.00",
      },
      {
        _id: "5f0eb856222a9a14fc7ac998",
        clientname: "Dogast",
        clientlocation: "108988-66 Ave",
        contactname: "Brilliant Styles",
        contactemail: "brilliance@gmail.cm",
        contactphone: "555-555-5555",
        productcode: "120000",
        assignedcontractor:"Simpson's Cleaning",
        expenditures: "$54.00",
        },
        {
          _id: "5f0eb856222a9a14fc7ac998",
          clientname: "Dogast",
          clientlocation: "108988-66 Ave",
          contactname: "Brilliant Styles",
          contactemail: "brilliance@gmail.cm",
          contactphone: "555-555-5555",
          productcode: "120000",
          assignedcontractor:"Simpson's Cleaning",
          expenditures: "$54.00",
          },
          {
            _id: "5f0eb856222a9a14fc7ac998",
            clientname: "Dogast",
            clientlocation: "108988-66 Ave",
            contactname: "Brilliant Styles",
            contactemail: "brilliance@gmail.cm",
            contactphone: "555-555-5555",
            productcode: "120000",
            assignedcontractor:"Simpson's Cleaning",
            expenditures: "$54.00",
            }



  ]
  loadingClients:boolean = true;
  clientSelected:boolean = false;



  selectClient(client){

    console.log(client)
    console.log("clientname",client.companyname)
    if(!this.clientSelected){

      this.clientSelected = true;

    }else{

      this.clientSelected = false;

    }
    this.router.navigate(['/clients/'+client.clientname])

  }
  startLoading(){

    setTimeout(()=>{

      this.loadingClients = false;

     },4000)

  }

  ngOnInit(): void {

    this.startLoading()
  }

}
