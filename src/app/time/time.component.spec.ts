import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeComponent } from './time.component';
import { UnixTimeConversion } from './time.component';
import {Measure, micro, milli, seconds} from 'safe-units';

describe('CurrentTimeComponent', () => {
  let timeComponent: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeComponent);
    timeComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(timeComponent).toBeTruthy();
  });

});

describe('UnixTimeConversion', () => {

  it('should detect seconds', () => {
    const unixTimeConversion = new UnixTimeConversion(1666917375);
    expect(unixTimeConversion.createMeasureSecondsSinceEpoch()).toEqual(Measure.of(1666917375, seconds));
  });

  it('should detect milliseconds', () => {
    const unixTimeConversion = new UnixTimeConversion(1666917375000);
    expect(unixTimeConversion.createMeasureSecondsSinceEpoch()).toEqual(Measure.of(1666917375, seconds));
  });

  it('should detect microseconds', () => {
    const unixTimeConversion = new UnixTimeConversion(1666917375000000);
    expect(unixTimeConversion.createMeasureSecondsSinceEpoch()).toEqual(Measure.of(1666917375, seconds));
  });
});
