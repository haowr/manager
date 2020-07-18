import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {

  constructor(private api: ApiService) { }

  contractorArray:object = [

    {
    _id: "5f0eb856222a9a14fc7ac998",
    companyname: "Dogast",
    contactname: "Brilliant Styles",
    contactemail: "brilliance@gmail.cm",
    companyaddress:"15811-33st AVE",
    assignedcontractor:"Simpson's Clothing",
    contactphone: "555-555-5555",
    productcode: "120000",
    expenditures: "$54.00",
    },

    {
      _id: "5f0eb856222a9a14fc7ac998",
      companyname: "Dogast",
      contactname: "Brilliant Styles",
      contactemail: "brilliance@gmail.cm",
      contactphone: "555-555-5555",
      productcode: "120000",
      expenditures: "$54.00",
      },

      {
        _id: "5f0eb856222a9a14fc7ac998",
        companyname: "Dogast",
        contactname: "Brilliant Styles",
        contactemail: "brilliance@gmail.cm",
        contactphone: "555-555-5555",
        productcode: "120000",
        expenditures: "$54.00",
        },

        {
          _id: "5f0eb856222a9a14fc7ac998",
          companyname: "Dogast",
          contactname: "Brilliant Styles",
          contactemail: "brilliance@gmail.cm",
          contactphone: "555-555-5555",
          productcode: "120000",
          expenditures: "$54.00",
          },

          {
            _id: "5f0eb856222a9a14fc7ac998",
            companyname: "Dogast",
            contactname: "Brilliant Styles",
            contactemail: "brilliance@gmail.cm",
            contactphone: "555-555-5555",
            productcode: "120000",
            expenditures: "$54.00",
            },



  ]
  loadingContractors:boolean = true;
  contractorSelected:boolean = false;



  selectContractor(){

    if(!this.contractorSelected){

      this.contractorSelected = true;

    }else{

      this.contractorSelected = false;

    }

  }


  newContractor(){
    console.log("i have run...")

    let contractor={

      companyname: "SOBEYS",
      contactemail: "sobeys@gmail.cm",
      contactphone: "666-555-5555",
      contactname: "SOBO BOW",
      productcode: "120000",
      expenditures: "$54.00"

    }
  this.api.addContractor(contractor).subscribe((data)=>{

    console.log(data)


  })
}
  ngOnInit(): void {
    this.newContractor()

  }

}
