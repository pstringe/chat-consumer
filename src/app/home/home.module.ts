import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ConversationListModule } from '../conversation-list/conversation-list.module';
import { ConversationViewModule } from '../conversation-view/conversation-view.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ConversationListModule,
    ConversationViewModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
