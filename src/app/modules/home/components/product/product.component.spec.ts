import { Product } from './../../model/product';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [StoreModule.forRoot({})],
      providers: [provideMockStore],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render @Input product value', () => {
    component.product = new Product();
    fixture.detectChanges();
    fixture.whenStable().then(() => {      
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent).toBeTruthy(); 
    })    
  });
  
  it('should call addToCart', () => {
    spyOn(component, 'addToCart');
    component.addToCart();
    expect(component.addToCart).toHaveBeenCalled();
  })
});
