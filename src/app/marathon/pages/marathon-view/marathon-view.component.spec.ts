import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonViewComponent } from './marathon-view.component';

describe('MarathonViewComponent', () => {
  let component: MarathonViewComponent;
  let fixture: ComponentFixture<MarathonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarathonViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarathonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
