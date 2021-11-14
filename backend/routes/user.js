import express from 'express';
import { userById, list, read, remove, update } from '../controllers/user';
import { requireSignin, isAuth, isAdmin } from '../controllers/auth';

const router = express.Router();

//Danh sách User
router.get('/users', list);
//Thông tin User
router.get('/users/:userId', read)
//Xoá User
router.delete('/users/:userId', remove)
//Sửa User
router.put('/users/:userId', update)
//Lấy param
router.param('userId', userById)


module.exports = router;