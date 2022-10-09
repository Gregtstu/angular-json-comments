import {Component, OnInit} from '@angular/core';
import {IMainComments} from "../../settings/types/IMainComments";
import {IChildrenComments} from "../../settings/types/ichildren-comments";
import {CommentsServiceService} from "../../settings/services/comments-service.service";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public mainComments!: IMainComments[];
  public childrenComments!: any[];

  constructor(private commentServ: CommentsServiceService) {
  }

  ngOnInit(): void {
    this.commentServ.getComments()
      .subscribe({
        next: (res) => {
          this.mainComments = res.filter(item => item.parentId == null);
          this.childrenComments = res.filter(item => item.parentId !== null);
          console.log(this.mainComments)
          console.log(this.childrenComments)
        },
        error: (err) => {
          console.log(err)
        }
      });
  }

}
