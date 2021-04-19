import {Component, Input} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss']
})
export class CopyComponent {

  @Input() copyText: string;

  constructor(private clipboard: Clipboard) {
    this.copyText = '';
  }

  onClick(): void {
    this.clipboard.copy(this.copyText);
    const msg = `Copied ${this.copyText} to clipboard`;
    console.log(msg);
  }

}
