import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsholderComponent } from './newsholder.component';

describe('NewsholderComponent', () => {
  let component: NewsholderComponent;
  let fixture: ComponentFixture<NewsholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
