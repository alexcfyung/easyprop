import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

import { Property } from '../api/client/properties/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit, OnChanges {
	
	
	@Input() clickedPropId: string;
	@Input() clicked: string;
	@Input() prop: Property;
	showMeDetail: boolean = false;
	
  constructor() { }

  ngOnInit() {
	 
  }
  
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
	if (changes["clicked"]) {
		if (this.prop._id == this.clickedPropId) {
			this.showMeDetail = !this.showMeDetail;
		}
	}
  }
  
  

}
