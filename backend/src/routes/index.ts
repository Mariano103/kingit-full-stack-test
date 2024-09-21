import { info, log } from '@/lib/chalkLogger';
import express from 'express';
import UserModel from '@/models/user.model';

const router = express.Router();

router.get('/', (req, res) => {
  log(info('Запрос на главную страницу'));
  res.json({ message: 'Welcome to the REST API' });
});

router.get('/get_users', (req, res) => {
  res.send(UserModel.getUsers());
});

router.post('/update_user', (req, res) => {
  console.log("req:", req);
  const result = UserModel.updateUser(Number(req.body.id), req.body.points);
  res.send(result);
});

export default router;
