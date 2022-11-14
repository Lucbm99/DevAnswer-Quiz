import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMobileComponent } from './inicio-mobile.component';

describe('InicioMobileComponent', () => {
  let component: InicioMobileComponent;
  let fixture: ComponentFixture<InicioMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
