import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  readonly tags = ['Angular', 'TypeScript', 'Frontend Architecture', 'AWS', 'Technical Leadership', 'RxJS'];
}
