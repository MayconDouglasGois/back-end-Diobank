import { UserService } from "../services/userService";
import { Request, Response } from 'express';
import { User } from "../entities/User";
export class UserController {
    private userService: UserService

        constructor(UserService: UserService){
            this.userService = UserService
        }

        async createUser(req: Request,res: Response){
            const user: User = req.body


          if(!(user.name && user.email && user.password)){
            return res.status(404).json({messeger : "bad Request! data not found"})
          }
          await this.userService.createUser(user.name,user.email, user.password)
            return res.status(201).json({"Success": "User created"})
        
        }

       async getUser(req: Request,res: Response){
          const {userId}: {userId: string} = req.body
            const user = await this.userService.getUser(userId)
            return res.status(200).json(user)
        }

        deleteUser(req: Request,res: Response){
          const user: User = req.body
          this.userService.deleteUser()
          return res.status(200).json({"Success": "User deleted"})
       }
}