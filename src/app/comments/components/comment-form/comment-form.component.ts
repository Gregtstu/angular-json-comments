import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {IComment} from "../../settings/types/IMainComments";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  public disabledFlag: boolean;
  public forma!: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.disabledFlag = false;
  }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      userName:['', Validators.required],
      commentText:['', Validators.required],
    })
  }

  submit() {
    if (this.forma.valid){
    const obj:any ={
      id: ( (Math.random() * 428).toFixed(3) ),
      userName: this.forma.value.userName,
      commentText: this.forma.value.commentText,
      childrenComments: [],
      date: new Date(),
    }
      console.log(obj);
      this.forma.reset();
      this.disabledFlag = false;
    }else {
      alert('Заполни все поля формы')
    }
  }
}
