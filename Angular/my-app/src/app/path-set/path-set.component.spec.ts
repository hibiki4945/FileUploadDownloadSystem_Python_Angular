import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathSetComponent } from './path-set.component';

describe('PathSetComponent', () => {
  let component: PathSetComponent;
  let fixture: ComponentFixture<PathSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PathSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PathSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
