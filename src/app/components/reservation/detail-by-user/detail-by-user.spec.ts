import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailByUser } from './detail-by-user';

describe('DetailByUser', () => {
  let component: DetailByUser;
  let fixture: ComponentFixture<DetailByUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailByUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailByUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
