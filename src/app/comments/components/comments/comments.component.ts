import {Component, OnInit} from '@angular/core';
import {CommentsServiceService} from "../../settings/services/comments-service.service";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public mainComments!: any[];
  public childComments!: any[];
  public ommentObj!: any;
  public childId!: any;
  public id!: string;

  constructor(private commentServ: CommentsServiceService) {
  }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentServ.getComments()
      .subscribe({
        next: (res) => {
          this.mainComments = res;
        },
        error: (err) => {
          alert("ОШИБКА");
        }
      });
  }

  addMainComment(obj: any) {
    this.commentServ.createComment(obj)
      .subscribe({
        next: (res) => {
          this.getComments();
        },
        error:(err)=> {
          alert("Ошибка!");
        }
      })
  }

  deleteComment(id: string) {
    this.commentServ.deleteComment(id)
      .subscribe({
        next: (res) => {
          this.getComments();
        },
        error: (err) => {
          alert("ОШИБКА!");
        }
      })
  }


  udateCommentObj(obj: any) {
    this.ommentObj = obj;
  }

  udateCommentText(id: any) {
    const obj = this.ommentObj;
    this.commentServ.updateComment(id, obj)
      .subscribe({
        next: (res) => {
          this.getComments();
        },
        error: (err) => {
          alert("Ошибка!");
        }
      })
  }

  newCommentId(id: any) {
    this.id = id;
  }

  saveNewComment(child: any) {
    this.commentServ.commentingComment(this.id, child)
      .subscribe({
        next:(res)=> {
          this.getComments();
        },
        error:(err)=> {
         alert("Ошибка!");
        }
      })
  }
  getChildId(childId: any) {
    this.childId = childId;
  }

  getNewChild(childId: any) {
    const obj = {child:[]};
    this.mainComments.map(item => {
      item.child = item.child.filter((elem:any) => elem.id != childId);
      obj.child = item.child;
    });
   this.commentServ.updateComment(this.childId, obj)
     .subscribe({
       next:(res)=> {
         console.log(res);
       },
       error:(err)=> {
         this.getComments();
       }
     })
  }

}
