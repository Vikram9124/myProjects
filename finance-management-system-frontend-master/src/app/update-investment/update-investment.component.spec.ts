import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvestmentComponent } from './update-investment.component';

describe('UpdateInvestmentComponent', () => {
  let component: UpdateInvestmentComponent;
  let fixture: ComponentFixture<UpdateInvestmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInvestmentComponent]
    });
    fixture = TestBed.createComponent(UpdateInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
