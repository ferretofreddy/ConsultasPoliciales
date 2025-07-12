import { Router } from 'express';
import { PersonasController } from './personas.controller';

// La corrección es añadir ': Router' aquí para ser explícitos.
const router: Router = Router();
const controller = new PersonasController();

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);

export default router;