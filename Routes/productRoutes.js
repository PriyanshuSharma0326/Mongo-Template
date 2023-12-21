import express from 'express';
import {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from '../Controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getSingleProduct);

router.post('/create', createProduct);

router.put('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct);

export default router;
