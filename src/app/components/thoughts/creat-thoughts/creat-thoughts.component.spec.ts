import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatThoughtsComponent } from './creat-thoughts.component';

describe('CreatThoughtsComponent', () => {
  let component: CreatThoughtsComponent;
  let fixture: ComponentFixture<CreatThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatThoughtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
