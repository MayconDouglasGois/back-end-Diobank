import { AppDataSource } from '../database';
import { UserController } from './userController';
import { UserRepository } from './../repository/UserRepository';
import { UserService } from '../services/userService';
import { LoginControler } from './LoginControler';
import { LoginService } from './../services/LoginService';

const manager = AppDataSource.manager

const userRepository = new UserRepository(manager)

const userService = new UserService(userRepository)

const userController = new UserController(userService)

const loginService = new LoginService(userService)

const loginControler = new LoginControler(loginService)

export {userController, loginControler}
