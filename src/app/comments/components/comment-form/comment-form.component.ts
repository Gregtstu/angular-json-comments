import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentsServiceService} from "../../settings/services/comments-service.service";
// import {IComment} from "../../settings/types/IMainComments";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  public disabledFlag: boolean;
  public forma!: FormGroup;
  @Output() emitComment: EventEmitter<any>;
  constructor(private formBuilder:FormBuilder) {
    this.disabledFlag = false;
    this.emitComment = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      userName:['', Validators.required],
      commentText:['', Validators.required],
    })
  }

  submit() {
    if (this.forma.valid){
      const randomId = ( (Math.random() * 428).toFixed(3) );
    const obj:any ={
      id: randomId,
      userName: this.forma.value.userName,
      commentText: this.forma.value.commentText,
      date: new Date().toISOString(),
      child:[]
    }
    this.emitComment.emit(obj);
    this.forma.reset();
    this.disabledFlag = false;

    }else {
      alert('Заполни все поля формы')
    }
  }
}
