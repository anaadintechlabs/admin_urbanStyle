import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html'
})
export class LockComponent {
  constructor() {}
  authForm : FormGroup
}
