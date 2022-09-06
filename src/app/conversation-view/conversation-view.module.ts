import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationViewComponent } from './conversation-view.component';
import { MessageTileComponent } from './message-tile/message-tile.component';



@NgModule({
  declarations: [
    ConversationViewComponent,
    MessageTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConversationViewComponent
  ]
})
export class ConversationViewModule { }
