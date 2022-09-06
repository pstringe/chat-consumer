import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTileComponent } from './message-tile.component';

describe('MessageTileComponent', () => {
  let component: MessageTileComponent;
  let fixture: ComponentFixture<MessageTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
