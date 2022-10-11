import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentsServiceService} from "../../settings/services/comments-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: any;
  @Input() child!: any;
  @Output() emitCommentId!: EventEmitter<any>;
  @Output() emitUpdateCommentId!: EventEmitter<any>;
  @Output() emitCommentingNewComment!: EventEmitter<any>;
  @Output() emitUpdateCommentCommentText!: EventEmitter<any>;
  @Output() emitCommentingCommentId!: EventEmitter<any>;
  @Output() emitNewChild!: EventEmitter<any>;
  @Output() emitNewChildId!: EventEmitter<any>;
  public forma!: FormGroup;
  public formaTwo!: FormGroup;
  public disabledFlag: boolean;
  public disabledFlagTwo: boolean;
  public disabledFlagThree: boolean;
  public commentId!: string;
  public childCommentId!: string;
  public formaThree!: FormGroup;
  public newCommentvalue!: any;

  constructor(private formBuild: FormBuilder, private commentServ: CommentsServiceService) {
    this.emitCommentId = new EventEmitter<any>();
    this.emitUpdateCommentId = new EventEmitter<any>();
    this.emitUpdateCommentCommentText = new EventEmitter<any>();
    this.emitCommentingCommentId = new EventEmitter<any>();
    this.emitCommentingNewComment = new EventEmitter<any>();
    this.emitNewChild = new EventEmitter<any>();
    this.emitNewChildId = new EventEmitter<any>();
    this.disabledFlag = false;
    this.disabledFlagTwo = false;
    this.disabledFlagThree = false;
  }

  ngOnInit(): void {
    this.forma = this.formBuild.group({
      commentText: [this.comment.commentText]
    });
    this.formaTwo = this.formBuild.group({
      userName: [null, Validators.required],
      commentText: [null, Validators.required],
    });
    this.child.forEach((item: any) => {
      this.newCommentvalue = item.commentText;

    })
    this.formaThree = this.formBuild.group({
      commentText: [this.newCommentvalue],
    });
  }


  deleteComment(id: string) {
    this.emitCommentId.emit(id);
  }

  updateComment(id: string) {
    this.disabledFlag = true;
    this.commentId = id;
  }


  submit() {
    const obj = {commentText: this.forma.value.commentText}
    this.emitUpdateCommentCommentText.emit(obj);
    this.emitUpdateCommentId.emit(this.commentId);
  }

  comentig(id: string) {
    this.emitCommentingCommentId.emit(id);
    this.disabledFlagTwo = true
    this.childCommentId = id;
  }

  childComment() {
    const randomId = ((Math.random() * 428).toFixed(3));
    const obj: any = {
      id: randomId,
      userName: this.formaTwo.value.userName,
      commentText: this.formaTwo.value.commentText,
      date: new Date().toISOString(),
    }
    this.child.push(obj);
    this.formaTwo.reset();
    this.disabledFlagTwo = false;
    this.emitCommentingNewComment.emit(this.child);
    this.emitCommentingCommentId.emit(this.childCommentId);
  }

  childCommentEdit() {

  }

  updateNewComment(id: any) {
    this.disabledFlagThree = true
  }

  deleteNewComment(id:string, id2:string) {
    this.emitNewChildId.emit(id);
    this.emitNewChild.emit(id2);
  }
}
