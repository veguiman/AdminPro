import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreacrumbsComponent } from './breacrumbs.component';

describe('BreacrumbsComponent', () => {
  let component: BreacrumbsComponent;
  let fixture: ComponentFixture<BreacrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreacrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreacrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
