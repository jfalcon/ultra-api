import { Application } from 'express';
import cmsRoutes from './cms';
import homeRoutes from './home';

// showing an index example without barrel imports
export function registerRoutes(app: Application): void {
  app.use('/', homeRoutes);
  app.use('/cms', cmsRoutes);
}
