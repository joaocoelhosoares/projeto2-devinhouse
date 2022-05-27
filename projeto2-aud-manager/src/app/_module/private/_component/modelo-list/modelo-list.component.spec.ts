import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloListComponent } from './modelo-list.component';

describe('ModeloListComponent', () => {
  let component: ModeloListComponent;
  let fixture: ComponentFixture<ModeloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeloListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
