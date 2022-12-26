import {sign} from 'jsonwebtoken'
import { ItokenData, ItokenOptions } from '../interface/ILogin';
import { UserService } from './UserService';

export class LoginService { 

    private tokenKey: string
    private userService: UserService

    constructor (userService: UserService) {
        this.tokenKey = "G1haWwiLCJpYXQiOjE2NzEwNjUwMDgsInN1YiI"
        this.userService = userService
    }

   private async getAuthenticationUser(email: string, password: string){
        const user = await this.userService.getAuthentication(email, password)

        const tokenData: ItokenData = {
            name: user.name,
            email: user.email
        }

       const tokenOptions: ItokenOptions ={
        subject: user.user_id
       }
 return {tokenData,tokenOptions}
    }

    async getToken(email: string, password: string): Promise<string> {
        const {tokenData,tokenOptions} = await this.getAuthenticationUser(email, password)
        const token = sign(tokenData,this.tokenKey,tokenOptions)
        return token
    }
}