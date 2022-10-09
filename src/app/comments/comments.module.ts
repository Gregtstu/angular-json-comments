import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CommentsModule { }
