import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailByOwner } from './detail-by-owner';

describe('DetailByOwner', () => {
  let component: DetailByOwner;
  let fixture: ComponentFixture<DetailByOwner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailByOwner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailByOwner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
