import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly data = inject(PortfolioDataService);
  expandedId = signal<string | null>(null);

  toggle(id: string): void {
    this.expandedId.update(current => current === id ? null : id);
  }
}
