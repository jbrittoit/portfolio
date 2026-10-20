import { Injectable } from '@angular/core';
import { SkillGroup, Project, Experience } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  readonly skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      skills: ['Angular', 'TypeScript', 'JavaScript (ES2022+)', 'HTML5', 'CSS3', 'Responsive UI']
    },
    {
      category: 'Reactive Programming',
      skills: ['RxJS', 'Observables', 'Subjects', 'Async Pipe', 'State Management Patterns']
    },
    {
      category: 'UI Architecture',
      skills: ['Standalone Components', 'Lazy Loading', 'Modular Design', 'Reusable Component Libraries', 'Performance Optimization']
    },
    {
      category: 'Cloud & Delivery',
      skills: ['AWS S3', 'AWS CloudFront', 'API Gateway', 'AWS CLI', 'Ubuntu / Linux', 'CI/CD Pipelines']
    },
    {
      category: 'Engineering Practices',
      skills: ['Git', 'Code Reviews', 'Technical Mentoring', 'Scrum / Agile', 'Debugging', 'Client Collaboration']
    },
    {
      category: 'Additional Exposure',
      skills: ['Node.js', 'React', 'React Native']
    }
  ];

  readonly projects: Project[] = [
    {
      id: 'fleet-management',
      title: 'Fleet Management Frontend',
      tagline: 'Angular portal for vehicle, rider, reservation & scheduling workflows',
      problem: 'A fleet-management platform required a scalable, maintainable frontend capable of handling complex workflows — vehicle tracking, rider management, reservation scheduling, and real-time status updates — while remaining performant and easy to extend by a growing team.',
      approach: 'Led the Angular frontend architecture from the ground up. Designed a modular feature structure with clearly separated concerns: smart container components handling data flow, presentational components for UI rendering, and shared libraries for reusable UI elements. Integrated with RESTful backend APIs using typed Angular services and RxJS streams.',
      decisions: [
        'Adopted a feature-module architecture to isolate domain boundaries and enable independent development.',
        'Used Angular reactive forms for complex scheduling and reservation inputs with robust validation.',
        'Implemented lazy-loaded route modules to keep the initial bundle lean.',
        'Established a shared component library for tables, modals, status badges, and form controls used across features.',
        'Collaborated directly with backend and product teams to align API contracts and UI requirements.'
      ],
      outcome: 'Delivered a production-ready fleet management portal supporting multiple concurrent user roles. The modular architecture allowed new features to be added without disrupting existing workflows. Deployment was managed via AWS S3 and CloudFront.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Reactive Forms', 'REST APIs', 'AWS S3', 'AWS CloudFront'],
      lessons: 'Investing early in a shared component library and clear module boundaries pays dividends as the team and feature set grow. Aligning on API contracts early prevents costly rework.'
    },
    {
      id: 'performance-optimization',
      title: 'Angular Performance Optimization',
      tagline: 'Frontend restructuring, lazy loading & memory-leak investigation',
      problem: 'Over time, the fleet management frontend accumulated technical debt: eagerly loaded modules, redundant dependencies, unsubscribed observables causing memory leaks, and large initial bundles that slowed perceived load time.',
      approach: 'Conducted a systematic audit of the Angular application. Profiled bundle sizes using Angular build stats and browser DevTools. Identified eagerly loaded feature modules, unused imports, and observable subscriptions that were never cleaned up. Restructured the module graph and introduced lazy loading for non-critical routes.',
      decisions: [
        'Converted feature modules to lazy-loaded routes, reducing the initial bundle.',
        'Removed unused third-party imports and replaced heavy utilities with lightweight alternatives.',
        'Introduced the async pipe and takeUntilDestroyed patterns to eliminate memory leaks.',
        'Refactored shared services to use pure functions where state was not required.',
        'Added OnPush change detection to high-frequency components to reduce unnecessary re-renders.'
      ],
      outcome: 'Measurable improvements in bundle size and perceived load time were observed after the restructuring. The team reported a significant improvement in application responsiveness — reported by the team as approximately 3× faster in their testing, though formal benchmark data was not captured and this figure should be verified before public citation. Maintenance burden was reduced through cleaner module boundaries.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular DevTools', 'Webpack Bundle Analyzer'],
      lessons: 'Performance optimization is most effective when driven by profiling data rather than assumptions. Establishing observable lifecycle discipline early prevents compounding memory issues.'
    },
    {
      id: 'aws-deployment',
      title: 'AWS Frontend Deployment Automation',
      tagline: 'Repeatable Angular build-and-deploy workflow using S3 and AWS CLI',
      problem: 'Frontend deployments were manual, error-prone, and time-consuming. Each release required multiple manual steps, increasing the risk of deploying incorrect build artifacts or missing cache invalidation steps.',
      approach: 'Designed and implemented a structured deployment workflow using Angular\'s production build pipeline, AWS CLI, and Linux shell scripting on Ubuntu. The workflow covered building the Angular application with environment-specific configuration, syncing the build output to the designated S3 bucket, and triggering CloudFront cache invalidation to ensure users received the latest assets.',
      decisions: [
        'Used Angular environment files to manage configuration per deployment target without exposing secrets in source code.',
        'Structured the AWS CLI sync command to delete stale files and set appropriate cache headers for hashed assets.',
        'Separated the build step from the deploy step to allow build artifact verification before release.',
        'Documented the deployment procedure to enable other team members to execute releases safely.'
      ],
      outcome: 'Deployment time was reduced from a lengthy manual process to a repeatable, documented workflow executable in a few minutes — as reported by the team. Release reliability improved and the risk of human error during deployment was significantly reduced.',
      technologies: ['Angular', 'AWS S3', 'AWS CloudFront', 'AWS CLI', 'Ubuntu / Linux', 'Shell Scripting'],
      lessons: 'Repeatability and documentation are as important as automation. A well-documented manual workflow is more reliable than an undocumented automated one.'
    },
    {
      id: 'geospatial-debugging',
      title: 'Geospatial Routing Troubleshooting',
      tagline: 'Systematic debugging of route failures in a map-integrated application',
      problem: 'The fleet management application integrated with a geospatial routing engine to calculate vehicle routes. Intermittent route calculation failures were reported in production — certain origin-destination pairs returned errors or incorrect routes, while others worked correctly. The failures were difficult to reproduce consistently.',
      approach: 'Applied a systematic debugging methodology. Began by reproducing the failures in a controlled environment using sanitized coordinate pairs that exhibited the issue. Validated inputs at each layer: frontend coordinate formatting, API request payloads, routing engine responses, and map rendering logic.',
      decisions: [
        'Isolated the frontend from the routing engine by logging and replaying exact API request payloads.',
        'Validated coordinate precision and format against the routing engine\'s documented requirements.',
        'Inspected road network data coverage for the affected geographic areas to identify data gaps.',
        'Tested boundary conditions: coordinates near water bodies, restricted zones, and areas with sparse road data.',
        'Verified fixes against the original failing cases before marking issues as resolved.'
      ],
      outcome: 'Root causes were identified across multiple layers: coordinate precision mismatches, road network data gaps in specific regions, and edge cases in the frontend\'s coordinate transformation logic. Fixes were applied and verified. The debugging process was documented to guide future investigations.',
      technologies: ['Angular', 'TypeScript', 'REST APIs', 'Browser DevTools', 'Geospatial Routing APIs'],
      lessons: 'Geospatial bugs require validating data quality at every layer, not just the application code. Systematic reproduction and isolation are more effective than guessing at root causes.'
    }
  ];

  readonly experiences: Experience[] = [
    {
      role: 'Senior Technical Lead',
      company: 'Saksoft',
      period: '2015 – Present · 9.4+ years',
      highlights: [
        'Lead frontend architecture and implementation for a production fleet management application.',
        'Drive Angular component design, modularization, lazy loading, and performance optimization.',
        'Conduct code reviews and pull-request reviews to maintain quality and consistency.',
        'Mentor developers on Angular patterns, frontend best practices, and product implementation.',
        'Allocate tasks, resolve technical blockers, and participate in daily Scrum ceremonies.',
        'Collaborate directly with clients and stakeholders to align technical delivery with product goals.',
        'Deploy approved frontend builds to AWS S3 using AWS CLI on Ubuntu.',
        'Troubleshoot complex frontend and geospatial-routing integration issues in production.'
      ]
    }
  ];
}
