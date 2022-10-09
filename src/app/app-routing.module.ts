import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./comments/components/comments/comments.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'comments', component: CommentsComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
