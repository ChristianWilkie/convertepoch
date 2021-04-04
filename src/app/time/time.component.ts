import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';

@Component({
  selector: 'app-current-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  constructor() { }

  currentTime = Date.now();
  pauseTime = false;

  ngOnInit(): void {
    timer(0, 1000).subscribe(x => {
      if (!this.pauseTime) {
        this.currentTime = Date.now();
      }
    });
  }

  mouseOver(active: boolean): void {
    this.pauseTime = active;
  }
}
