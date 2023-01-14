import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCreateComponent } from './users-modify.component';

describe('UsersCreateComponent', () => {
  let component: UsersCreateComponent;
  let fixture: ComponentFixture<UsersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
