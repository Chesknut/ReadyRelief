import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefComponent } from './relief.component';

describe('ReliefComponent', () => {
  let component: ReliefComponent;
  let fixture: ComponentFixture<ReliefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReliefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
