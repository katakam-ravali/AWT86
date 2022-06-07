import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IiiItbComponent } from './iii-itb.component';

describe('IiiItbComponent', () => {
  let component: IiiItbComponent;
  let fixture: ComponentFixture<IiiItbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IiiItbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IiiItbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
