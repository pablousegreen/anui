import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchpostsComponent } from './merchposts.component';

describe('MerchpostsComponent', () => {
  let component: MerchpostsComponent;
  let fixture: ComponentFixture<MerchpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
