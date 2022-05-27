import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloFormComponent } from './modelo-form.component';

describe('ModeloFormComponent', () => {
  let component: ModeloFormComponent;
  let fixture: ComponentFixture<ModeloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
