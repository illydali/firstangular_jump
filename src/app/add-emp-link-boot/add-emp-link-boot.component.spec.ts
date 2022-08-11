import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpLinkBootComponent } from './add-emp-link-boot.component';

describe('AddEmpLinkBootComponent', () => {
  let component: AddEmpLinkBootComponent;
  let fixture: ComponentFixture<AddEmpLinkBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpLinkBootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpLinkBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
