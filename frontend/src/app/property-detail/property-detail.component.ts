import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

import { Property } from '../api/client/properties/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit, OnChanges {
	
	
	@Input() clickedPropId: string;
	@Input() clicked: boolean;
	@Input() prop: Property;
	showMeDetail: boolean = false;
	unitsMap: object;
	unitsMapKey: string[];
	
  constructor() { 
	this.unitsMapKey = [];
  }

  ngOnInit() {
	 
  }
  
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
	if (changes["clicked"]) {
		if (this.prop._id == this.clickedPropId) {
			this.showMeDetail = !this.showMeDetail;
			if (this.showMeDetail) {
				this.unitsMap = this.getUnitsMap(this.prop, false);
			}
		}
	}
  }
  
  getUnitsMap(p: Property, forceGenerate: boolean): object {
	if (!forceGenerate && this.unitsMap) {
		return this.unitsMap;
	}
	
	let tempMap = {};
	for (let unit of p.units) {
		let unitFloor: string = unit.floor+"";
		if (!tempMap[unitFloor]) {
			tempMap[unitFloor] = [unit];
			this.unitsMapKey.push(unitFloor);
		} else {
			tempMap[unitFloor].push(unit);
		}
	}
	return tempMap;
	
  }
  
  

}
