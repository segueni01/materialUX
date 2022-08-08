import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSessionComponent } from './content-session.component';

describe('ContentSessionComponent', () => {
  let component: ContentSessionComponent;
  let fixture: ComponentFixture<ContentSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
