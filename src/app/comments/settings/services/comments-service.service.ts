import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CommentsServiceService {

  constructor(private http:HttpClient) { }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/comments');
  }
}
