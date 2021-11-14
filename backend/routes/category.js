import express from 'express';
import { create, list, categoryById, read, update, remove, listRelated } from '../controllers/category';
import { userById } from '../controllers/user';
import { requireSignin, isAdmin, isAuth } from '../controllers/auth';

const router = express.Router();


//Danh sách danh mục
router.get('/categories', list);
//Chi tiết danh mục
router.get('/categories/:categoryId', read);
//Thêm mới danh mục
router.post('/categories/:userId', requireSignin, isAuth, isAdmin, create);
//Cập nhật danh mục
router.put('/categories/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);
//Xoá danh mục
router.delete('/categories/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);
//List Danh mục( ngoại trừ Danh mục hiện tại)
router.get('/categories/related/:categoryId', listRelated);
//Lấy param
router.param('categoryId', categoryById);
router.param('userId', userById)


module.exports = router;