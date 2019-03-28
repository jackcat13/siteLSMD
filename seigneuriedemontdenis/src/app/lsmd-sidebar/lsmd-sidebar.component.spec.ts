import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsmdSidebarComponent } from './lsmd-sidebar.component';

describe('LsmdSidebarComponent', () => {
  let component: LsmdSidebarComponent;
  let fixture: ComponentFixture<LsmdSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsmdSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsmdSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
