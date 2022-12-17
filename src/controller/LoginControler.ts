import { Request, Response } from 'express';
import {sign} from 'jsonwebtoken'

const user = {
    user_id: "123",
    name: "maycon",
    email: "test@mail", 
    password: "password"
}

export class LoginControler {

    async login(req: Request, res: Response){

        const tokenData = {
            name: user.name,
            email: user.email
        }

       const tokenKey = "G1haWwiLCJpYXQiOjE2NzEwNjUwMDgsInN1YiI"

       const tokenOptions ={
        subject: user.user_id
       }

       const token = sign(tokenData,tokenKey,tokenOptions)

       res.status(200).json({token})

    }
}