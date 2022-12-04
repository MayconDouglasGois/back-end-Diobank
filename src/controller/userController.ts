import { userService } from "../services/userService";
import { Request, Response } from 'express';
import { IUser } from "../model/IUser";
export class userController {
    private UserService: userService

        constructor(userService: userService){
            this.UserService = userService
        }

        createUser(req: Request,res: Response){
            const user: IUser = req.body


          if(!user.name){
            return res.status(404).json({"Error": "name does not exist"})
          }
          if(!user.email){
            return res.status(404).json({"Error": "email does not exist"})
          }
         

            this.UserService.createUser(user.name,user.email)
            return res.status(201).json({"Success": "User created"})
        
        }

        getUser(req: Request,res: Response){
            const user = this.UserService.getUser()
            return res.status(200).json(user)
        }

        deleteUser(req: Request,res: Response){
          const user: IUser = req.body
          this.UserService.deleteUser(user.name)
          return res.status(200).json({"Success": "User deleted"})
       }
}