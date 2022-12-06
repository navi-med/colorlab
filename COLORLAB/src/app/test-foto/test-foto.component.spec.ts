import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFotoComponent } from './test-foto.component';

describe('TestFotoComponent', () => {
  let component: TestFotoComponent;
  let fixture: ComponentFixture<TestFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
