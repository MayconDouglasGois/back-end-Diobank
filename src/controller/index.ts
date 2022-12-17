import { AppDataSource } from '../database';
import { UserController } from './UserController';
import { UserRepository } from './../repository/UserRepository';
import { UserService } from '../services/UserService';
import { LoginControler } from './LoginControler';

const manager = AppDataSource.manager

const userRepository = new UserRepository(manager)

const userService = new UserService(userRepository)

const userController = new UserController(userService)

const loginControler = new LoginControler()

export {userController, loginControler}
