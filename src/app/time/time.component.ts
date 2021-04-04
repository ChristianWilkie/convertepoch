import { Component, OnInit } from '@angular/core';
import {TimeService} from '../time.service';

@Component({
  selector: 'app-current-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  public readonly timeService: TimeService;

  constructor(timeService: TimeService) {
    this.timeService = timeService;
    this.currentDate = new Date();
  }
  currentDate: Date;
  pauseTime = false;

  ngOnInit(): void {
    this.timeService.currentDate$.subscribe(
      nextDate => {
        if (!this.pauseTime) {
          this.currentDate = nextDate;
        }
      });
  }

  mouseOver(active: boolean): void {
    this.pauseTime = active;
  }

  public dateStringForEpoch(): string {
    return this.timeService.getDateString(new Date(1970, 0, 1));
  }
}
