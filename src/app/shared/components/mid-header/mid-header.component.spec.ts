import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MidHeaderComponent } from './mid-header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('MidHeaderComponent', () => {
  let component: MidHeaderComponent;
  let fixture: ComponentFixture<MidHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidHeaderComponent ],
      imports: [
        RouterTestingModule,
        FormsModule 
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render  @Input categories value', () => {
    component.categories = ['work'];
    fixture.detectChanges();
    fixture.whenStable().then(() => {      
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent).toBe('work'); 
    })    
  });  

  it('should correctly render  @Input cart value', () => {
    component.cart = 0;
    fixture.detectChanges();
    fixture.whenStable().then(() => {      
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent).toBe(0); 
    })    
  });  
});
