import { Component, OnInit } from '@angular/core';
import {TimeService} from '../time.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {
  public readonly timeService: TimeService;
  public currentDate: Date = new Date();
  public fullDaysSinceEpoch: number;

  constructor(timeService: TimeService) {
    this.timeService = timeService;
    this.fullDaysSinceEpoch = timeService.getFullDaysSinceEpoch(this.currentDate);
  }

  ngOnInit(): void {
  }

}
