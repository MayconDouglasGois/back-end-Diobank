import { ItokenData, ItokenOptions } from '../interface/ILogin';
import { LoginService } from './LoginService';

import * as jwt from 'jsonwebtoken'
import { User } from './../entities/User';
import { UserService } from './UserService';

jest.mock('jsonwebtoken')

describe("LoginService",()=> {

    const mockUserService: Partial<UserService> = {}

    const loginService = new LoginService(mockUserService as UserService)

    it("deve retornar um token de acesso",()=>{
    
       jest.spyOn(jwt, "sign").mockImplementation(()=> "token")
       const token = loginService.getToken("email", "password")
       expect(token).toBe("token")
    })
})