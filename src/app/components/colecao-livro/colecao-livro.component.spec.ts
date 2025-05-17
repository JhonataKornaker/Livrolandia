import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoLivroComponent } from './colecao-livro.component';

describe('ColecaoLivroComponent', () => {
  let component: ColecaoLivroComponent;
  let fixture: ComponentFixture<ColecaoLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColecaoLivroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColecaoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
