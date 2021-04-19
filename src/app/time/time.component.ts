import { Component, OnInit } from '@angular/core';
import {TimeService} from '../time.service';



@Component({
  selector: 'app-current-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  public readonly timeService: TimeService;
  public currentDate: Date = new Date();
  public fullDaysSinceEpoch: number;

  public gridOptions = {
    columnDefs: [
      { field: 'value', sortable: true, minWidth: 150 },
      { field: 'unit', sortable: true, minWidth: 200 },
      { field: 'copy', headerName: '', sortable: false, minWidth: 50 }
    ],
    enableCellChangeFlash: true,
    defaultColDef: {
      flex: 1,
      minWidth: 200,
      resizable: true,
    },
    enableCellTextSelection: true,
    // rowSelection: 'multiple',
    allowContextMenuWithControlKey: true,
    suppressContextMenu: false
  };

  public rowData = [
    { value: 0.0, unit: 'Seconds', copy: '📋' },
    { value: 0, unit: 'Milliseconds', copy: '📋' },
    { value: 0, unit: 'Microseconds', copy: '📋' },
  ];

  constructor(timeService: TimeService) {
    this.timeService = timeService;
    this.fullDaysSinceEpoch = timeService.getFullDaysSinceEpoch(this.currentDate);
  }

  ngOnInit(): void {
    this.timeService.currentDate$.subscribe(
      nextDate => {
        this.currentDate = nextDate;
      });
    this.rowData = [
      { value: this.currentDate.getTime() / 1000, unit: 'Seconds', copy: '📋' },
      { value: this.currentDate.getTime(), unit: 'Milliseconds', copy: '📋' },
      { value: this.currentDate.getTime() * 1000, unit: 'Microseconds', copy: '📋' },
    ];
  }

  public getCurrentSeconds(): number {
    return Math.floor(this.currentDate.getTime() / 1000);
  }

  public dateStringForEpoch(): string {
    return this.timeService.getDateString(new Date(1970, 0, 1));
  }
}
