import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificattionComponent } from './notificattion.component';

describe('NotificattionComponent', () => {
  let component: NotificattionComponent;
  let fixture: ComponentFixture<NotificattionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificattionComponent]
    });
    fixture = TestBed.createComponent(NotificattionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
