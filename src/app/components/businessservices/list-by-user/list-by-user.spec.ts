import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByUser } from './list-by-user';

describe('ListByUser', () => {
  let component: ListByUser;
  let fixture: ComponentFixture<ListByUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListByUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListByUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
