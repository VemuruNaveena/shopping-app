import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityComponent } from './university.component';

describe('UniversityComponent', () => {
  let component: UniversityComponent;
  let fixture: ComponentFixture<UniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
