import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBackComponent } from './inicio-back.component';

describe('InicioBackComponent', () => {
  let component: InicioBackComponent;
  let fixture: ComponentFixture<InicioBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
