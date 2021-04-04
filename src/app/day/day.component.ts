import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  private readonly timeSinceEpoch: number;
  public fullDaysSinceEpoch: number;
  public dateString: string;

  constructor() {
    this.timeSinceEpoch = new Date().getTime();
    this.fullDaysSinceEpoch = this.getFullDaysSinceEpoch(this.timeSinceEpoch);
    this.dateString = new Date(this.timeSinceEpoch).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  ngOnInit(): void {
  }

  getFullDaysSinceEpoch(time: number): number {
    return Math.floor(time / 8.64e7);
  }
}
