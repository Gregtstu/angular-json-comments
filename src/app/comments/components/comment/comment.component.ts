import {Component, Input, OnInit} from '@angular/core';
import {IMainComments} from "../../settings/types/IMainComments";
import {IChildrenComments} from "../../settings/types/ichildren-comments";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: any;
  @Input() mainComments!: IMainComments[];
  @Input() childrenComments!: IChildrenComments[];

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.mainComments)
  }

}
