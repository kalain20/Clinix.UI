import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootHeaderComponent } from './foot-header.component';

describe('FootHeaderComponent', () => {
  let component: FootHeaderComponent;
  let fixture: ComponentFixture<FootHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
