import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { OrderSummaryComponent } from './order-summary.component';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummaryComponent ],
      imports: [StoreModule.forRoot({})],
      providers: [provideMockStore],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('test calling getCategories', () => {
    spyOn(component, 'removeItem');
    component.removeItem({});
    expect(component.removeItem).toHaveBeenCalled()
  })    
});
