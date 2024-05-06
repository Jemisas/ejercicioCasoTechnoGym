import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMarathonComponent } from './table-marathon.component';

describe('TableMarathonComponent', () => {
  let component: TableMarathonComponent;
  let fixture: ComponentFixture<TableMarathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableMarathonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableMarathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
