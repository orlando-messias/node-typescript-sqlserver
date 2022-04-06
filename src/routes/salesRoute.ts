import { Router } from 'express';
import { addNewSale, getSales } from '../controllers/salesController';

const router = Router();

router.get('/', getSales);
router.post('/', addNewSale);

export default router;
