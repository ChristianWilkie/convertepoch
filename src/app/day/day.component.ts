import { Component, OnInit } from '@angular/core';
import {TimeService} from '../time.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  private readonly timeService;
  public fullDaysSinceEpoch: number;
  public dateString: string;

  constructor(timeService: TimeService) {
    this.timeService = timeService;
    const date = new Date();
    this.fullDaysSinceEpoch = timeService.getFullDaysSinceEpoch(date);
    this.dateString = timeService.getDateString(date);
  }

  ngOnInit(): void {
  }
}
