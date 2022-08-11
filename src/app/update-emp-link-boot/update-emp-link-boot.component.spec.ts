import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpLinkBootComponent } from './update-emp-link-boot.component';

describe('UpdateEmpLinkBootComponent', () => {
  let component: UpdateEmpLinkBootComponent;
  let fixture: ComponentFixture<UpdateEmpLinkBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpLinkBootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmpLinkBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
