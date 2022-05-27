import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoFormComponent } from './colecao-form.component';

describe('ColecaoFormComponent', () => {
  let component: ColecaoFormComponent;
  let fixture: ComponentFixture<ColecaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
