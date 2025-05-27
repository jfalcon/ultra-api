import { Router } from 'express';
import * as controllers from '@/app/controllers';

const router = Router();

// showing examples with barrel imports
router.get('/', controllers.cms.index);
router.get('/:id', controllers.cms.getContentById);

export default router;
