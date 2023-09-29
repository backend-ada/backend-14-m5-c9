import { Router } from 'express';
import UserController from '../controllers/user-controller';

export const userRouter = Router();

userRouter.post('/', UserController.createUser);
userRouter.post('/login', UserController.login);

userRouter.get('/', UserController.getAll);

userRouter.patch('/:username', UserController.update);

userRouter.delete('/:username', UserController.delete);
