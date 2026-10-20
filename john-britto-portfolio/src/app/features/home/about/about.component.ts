import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly stats = [
    { value: '9.4+', label: 'Years Experience' },
    { value: '4+', label: 'Major Projects' },
    { value: 'Angular', label: 'Primary Stack' },
    { value: 'AWS', label: 'Cloud Platform' },
  ];
}
