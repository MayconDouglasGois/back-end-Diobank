import { EntityManager } from "typeorm";
import { User } from "../entities/User";

export class UserRepository {
    private manager: EntityManager

    constructor(manager: EntityManager){
        this.manager = manager
    } 

   async CreateUser(user: User): Promise<User> {
      return this.manager.save(user)
    }

    async getUser(userId: string): Promise<User> {
        return this.manager.findOne(User,{
            where:{
                user_id : userId
            }
        })
      }

      async getUserByEmailAndPassword(email: string, password: string): Promise<User> {
        return this.manager.findOne(User,{
            where:{
                email,
                password
            }
        })
      }
}