import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoignantComponent } from './soignant.component';

describe('SoignantComponent', () => {
  let component: SoignantComponent;
  let fixture: ComponentFixture<SoignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
