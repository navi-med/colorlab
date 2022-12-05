import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInstrComponent } from './test-instr.component';

describe('TestInstrComponent', () => {
  let component: TestInstrComponent;
  let fixture: ComponentFixture<TestInstrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInstrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestInstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
