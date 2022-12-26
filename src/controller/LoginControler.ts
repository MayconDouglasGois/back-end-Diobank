import { Request, Response } from 'express';
import { LoginService } from '../services/LoginService';
import { ItokenData, ItokenOptions } from '../interface/ILogin';
import { User } from '../entities/User';
import { Params } from 'express-serve-static-core';

export class LoginControler {

    private loginService: LoginService

    constructor(loginService: LoginService){
        this.loginService = loginService
    }

    async login(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {

        const {email, password} = req.body

        if(email && password){

            return res.status(404).json({messeger : "bad Request! data not found"})
        }




      

       const token = this.loginService.getToken(email, password)

       res.status(200).json({token})

    }
}