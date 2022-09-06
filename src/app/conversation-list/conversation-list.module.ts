import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationListComponent } from './conversation-list.component';
import { ConversationPreviewComponent } from './conversation-preview/conversation-preview.component';



@NgModule({
  declarations: [
    ConversationListComponent,
    ConversationPreviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConversationListComponent
  ]
})
export class ConversationListModule { }
