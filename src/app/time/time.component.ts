import { Component, OnInit } from '@angular/core';
import {TimeService} from '../time.service';
import {MatInputModule} from '@angular/material/input';
import {GenericMeasure, Measure, micro, milli, seconds} from 'safe-units';



export class UnixTimeConversion {
  private readonly DAY_IN_MILLISECONDS: number = 8.64 * (10 ** 7);
  /**
   * if the input timestamp > this value, assume the input is milliseconds and not seconds
   */
  private readonly UNIX_TIMESTAMP_MS_SWITCH_VALUE: number = 1_000_000_000_000;
  private readonly UNIX_TIMESTAMP_MICROSECONDS_SWITCH_VALUE: number = 1_000 * this.UNIX_TIMESTAMP_MS_SWITCH_VALUE;
  public date: Date;
  public secondsSinceEpoch: number;
  public measureSecondsSinceEpoch: GenericMeasure<number, {time: '1'}>;
  public milliSecondsSinceEpoch: number;
  public microSecondsSinceEpoch: number;
  public daysSinceEpoch: number;

  constructor(secondsSinceEpoch: number) {
    if (secondsSinceEpoch > this.UNIX_TIMESTAMP_MICROSECONDS_SWITCH_VALUE) {
      secondsSinceEpoch /= 1_000_000;
    } else if (secondsSinceEpoch > this.UNIX_TIMESTAMP_MS_SWITCH_VALUE) {
      secondsSinceEpoch /= 1_000;
    }
    this.secondsSinceEpoch = secondsSinceEpoch;
    this.milliSecondsSinceEpoch = 1000 * this.secondsSinceEpoch;
    this.date = new Date(this.milliSecondsSinceEpoch);
    this.microSecondsSinceEpoch = 1000 * this.milliSecondsSinceEpoch;
    this.measureSecondsSinceEpoch = this.createMeasureSecondsSinceEpoch();
    this.daysSinceEpoch = this.getFullDaysSinceEpoch(this.date);
  }

  public createMeasureSecondsSinceEpoch(): GenericMeasure<number, {time: '1'}> {
    return Measure.of(this.secondsSinceEpoch, seconds);
  }

  private getFullDaysSinceEpoch(date: Date): number {
    return Math.floor(date.getTime() / this.DAY_IN_MILLISECONDS);
  }
}

@Component({
  selector: 'app-current-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  public readonly timeService: TimeService;
  public currentDate: Date = new Date();
  public fullDaysSinceEpoch: number;
  // tslint:disable-next-line:variable-name
  private _inputEpochString: string;
  public unixTimeConversion: UnixTimeConversion | null;

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
    const currentDate: Date = this.currentDate;
    this.timeService = timeService;
    this.fullDaysSinceEpoch = timeService.getFullDaysSinceEpoch(currentDate);
    this._inputEpochString = '';
    this.unixTimeConversion = null;
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


  get inputEpochString(): string {
    return this._inputEpochString;
  }

  set inputEpochString(value: string) {
    this._inputEpochString = value;
    try {
      this.unixTimeConversion = new UnixTimeConversion(Number(value));
    } catch (error) {
      this.unixTimeConversion = null;
    }
  }
}
