import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtcontentComponent } from './thoughtcontent.component';

describe('ThoughtcontentComponent', () => {
  let component: ThoughtcontentComponent;
  let fixture: ComponentFixture<ThoughtcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThoughtcontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThoughtcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
