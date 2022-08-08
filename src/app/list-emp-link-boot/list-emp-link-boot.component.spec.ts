import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpLinkBootComponent } from './list-emp-link-boot.component';

describe('ListEmpLinkBootComponent', () => {
  let component: ListEmpLinkBootComponent;
  let fixture: ComponentFixture<ListEmpLinkBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpLinkBootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmpLinkBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
