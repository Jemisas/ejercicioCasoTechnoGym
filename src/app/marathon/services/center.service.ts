import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CenterEntity} from "../model/center.entity";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  constructor(private http: HttpClient) { }

  getMarathonCenters(): Observable<CenterEntity[]> {
    return this.http.get<CenterEntity[]>(`${environment.url}centers`);
  }

}
