import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundTableRowComponent } from './compound-table-row.component';

describe('CompoundTableRowComponent', () => {
  let component: CompoundTableRowComponent;
  let fixture: ComponentFixture<CompoundTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
