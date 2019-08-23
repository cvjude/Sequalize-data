import express from 'express';
import { addUser, findUser, deleteUser, updateUser } from '../controllers/user';

const router = express();

router.post('/user', addUser);
router.get('/user', findUser);
router.delete('/user', deleteUser);
router.patch('/user', updateUser);

export default router;
