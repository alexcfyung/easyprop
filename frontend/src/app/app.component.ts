import { Component, OnInit } from '@angular/core';

import { Property, PropertyService } from './api/client/properties/property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Easy Property Management';
  clickSwitch: boolean = false;
  currPropId: string;

  properties: Property[] = [];

  constructor(
    private propertyService: PropertyService,
  ) { }

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties() {
    this.propertyService.queryProperties()
      .subscribe(properties => {
        this.properties = properties;
      });
  }
  
  markPropId(id: string) {
	  this.currPropId = id;
	  console.log(this.currPropId);
	  this.clickSwitch = !this.clickSwitch;
  }
	  
  toggleDetail() { 
	   
  }
}
