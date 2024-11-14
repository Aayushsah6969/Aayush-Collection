import express from 'express';
import { deleteProduct, getProduct, getOneProduct, updateProduct, uploadProduct } from '../controllers/product.controller.js';
import { isAdminMiddleware } from '../Authenticate/AdminMiddleWare.js';
// import {isAdmin} from '../Authenticate/AdminMiddleWare.js';
import upload from '../config/multer.js';

const router = express.Router();

router.get('/getproduct', getProduct);
router.get('/getoneproduct/:id', getOneProduct);
//need to be protected by middlware since this is to be done by admin only...
router.post('/uploadproduct', upload.single('image'),isAdminMiddleware, uploadProduct);
// router.post('/uploadbook', isAdminMiddleware,uploadBook);
router.put('/updateproduct/:id',isAdminMiddleware,updateProduct);
router.delete('/deleteproduct/:id',isAdminMiddleware,deleteProduct);

export default router;