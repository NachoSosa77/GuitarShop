import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetlleComponent } from './detalle.component';

describe('DetlleComponent', () => {
  let component: DetlleComponent;
  let fixture: ComponentFixture<DetlleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetlleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetlleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
