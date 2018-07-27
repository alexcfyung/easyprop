import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailComponent } from './property-detail.component';

describe('PropertyDetailComponent', () => {
  let component: PropertyDetailComponent;
  let fixture: ComponentFixture<PropertyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should generate correct unitsMap little', () => {
	let testProp = {
		_id: "abc",
		name: "test",
		address: "a street",
		units: [
		{number: "100", floor: 1, rent: 100},
		{number: "101", floor: 1, rent: 120},
		{number: "200", floor: 2, rent: 100}]
	};
	let unitsMap = component.getUnitsMap(testProp, true);
    expect(unitsMap).toEqual({
		"1": [{number: "100", floor: 1, rent: 100}, {number: "101", floor: 1, rent: 120}],
		"2": [{number: "200", floor: 2, rent: 100}]
	});
  });
});
