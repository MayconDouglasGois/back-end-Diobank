import { userService } from './../services/userService';
import { IUser } from './../model/IUser';
import { userController } from './userController';

const User: IUser[] = []

const UserService = new userService(User)

export const UserController = new userController(UserService)