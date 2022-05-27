import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoListComponent } from './colecao-list.component';

describe('ColecaoListComponent', () => {
  let component: ColecaoListComponent;
  let fixture: ComponentFixture<ColecaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
