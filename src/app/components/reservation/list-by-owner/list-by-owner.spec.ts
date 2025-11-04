import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByOwner } from './list-by-owner';

describe('ListByOwner', () => {
  let component: ListByOwner;
  let fixture: ComponentFixture<ListByOwner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListByOwner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListByOwner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
