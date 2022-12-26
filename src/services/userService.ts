
import { UserRepository } from '../repository/UserRepository';
import { User } from '../entities/User';



export class UserService {

   private userRepository: UserRepository

   constructor(userRepository: UserRepository){
      this.userRepository = userRepository
    }


  async createUser(name: string, email: string, password: string): Promise<User>{
   const user = new User(name,email,password)
   return this.userRepository.CreateUser(user)
 }

  async getUser(userId: string): Promise<User>{
   return this.userRepository.getUser(userId)
 }

 async getAuthentication (email: string, password: string){
  return this.userRepository.getUserByEmailAndPassword(email, password)
 }

 deleteUser(){

 }

}