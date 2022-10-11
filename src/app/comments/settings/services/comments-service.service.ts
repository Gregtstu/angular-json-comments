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

  createComment(obj:any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/comments', obj);
  }

  deleteComment(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/comments/${id}`);
  }


  updateComment(id: string, obj: any): Observable<any> {
    return this.http.patch<any>(`http://localhost:3000/comments/${id}`, obj);
  }

  commentingComment(id: string, obj: any): Observable<any> {
    return this.http.patch<any>(`http://localhost:3000/comments/${id}`, {child:obj});
  }


}

