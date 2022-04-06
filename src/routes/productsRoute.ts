import { Router } from 'express';
import {
  getProducts,
  getProductByName,
  getProductById,
  addNewProduct,
  deleteProductById,
  updateProductById,
} from '../controllers/productsController';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.get('/name/:name', getProductByName);
router.post('/', addNewProduct);
router.delete('/:id', deleteProductById);
router.put('/:id', updateProductById);

export default router;
