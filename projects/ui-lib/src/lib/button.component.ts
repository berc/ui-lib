import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'dsw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label = '';
  @Input() isHover = false;
  @Input() isActive = false;

  onClick = new EventEmitter<Event>();
}
