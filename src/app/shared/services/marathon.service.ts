import { Injectable } from '@angular/core';
import { environment} from "../../../environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, retry, throwError } from "rxjs";
import {ParticipantsEntity} from "../model/participants.entity";
import { map } from 'rxjs/operators';
import {CenterEntity} from "../../marathon/model/center.entity";

@Injectable({
  providedIn: 'root'
})
export class MarathonService {


  constructor(private http: HttpClient) { }


  getListParticipants(): Observable<ParticipantsEntity[]> {
    return this.http.get<ParticipantsEntity[]>(`${environment.url}participants`);
  }

  getFirstParticipant(): Observable<ParticipantsEntity> {
    return this.getListParticipants().pipe(
      map(participants => participants.reduce((prev, current) => (prev.ranking > current.ranking) ? current : prev))
    );
  }


  }
