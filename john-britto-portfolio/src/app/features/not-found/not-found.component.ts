import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <div class="not-found">
      <p class="not-found-code">404</p>
      <h1 class="not-found-title">Page Not Found</h1>
      <p class="not-found-text">The page you're looking for doesn't exist.</p>
      <a href="/" class="btn btn-primary">Go Home</a>
    </div>
  `,
  styles: [`
    .not-found {
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2rem;
      gap: 1rem;
    }
    .not-found-code {
      font-family: var(--font-mono);
      font-size: 5rem;
      font-weight: 700;
      color: var(--accent);
      line-height: 1;
    }
    .not-found-title {
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--text-primary);
    }
    .not-found-text {
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
    }
  `]
})
export class NotFoundComponent {}
