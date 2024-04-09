import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCustomersComponent } from './your-customers.component';

describe('YourCustomersComponent', () => {
  let component: YourCustomersComponent;
  let fixture: ComponentFixture<YourCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourCustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
