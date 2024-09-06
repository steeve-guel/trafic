import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMapBoxComponent } from './carte-map-box.component';

describe('CarteMapBoxComponent', () => {
  let component: CarteMapBoxComponent;
  let fixture: ComponentFixture<CarteMapBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteMapBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteMapBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
