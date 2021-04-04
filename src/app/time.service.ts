import { Injectable } from '@angular/core';
import {Observable, of, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  public readonly currentDate$: Observable<Date>;

  constructor() {
    this.currentDate$ = timer(0, 1000).pipe(
      map((x: number) => new Date())
    );
  }

  public getDateString(date: Date): string {
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  public getFullDaysSinceEpoch(date: Date): number {
    return Math.floor(date.getTime() / 8.64e7);
  }
}
