import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'register-api';

  model: any = {};

  onSubmit() {
    console.log('Form submission success', this.model.value);
  }
}
