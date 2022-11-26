import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertahotelComponent } from './ofertahotel.component';

describe('OfertahotelComponent', () => {
  let component: OfertahotelComponent;
  let fixture: ComponentFixture<OfertahotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertahotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertahotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
