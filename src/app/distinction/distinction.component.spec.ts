import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctionComponent } from './distinction.component';

describe('DistinctionComponent', () => {
  let component: DistinctionComponent;
  let fixture: ComponentFixture<DistinctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistinctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
