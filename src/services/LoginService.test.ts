import { LoginService } from './LoginService';
import * as jwt from 'jsonwebtoken'
import { UserService } from './userService';

jest.mock('jsonwebtoken')

describe("LoginService",()=> {

    const mockUserService: Partial<UserService> = {}

    const loginService = new LoginService(mockUserService as UserService)

    it("deve retornar um token de acesso",async()=>{
    
       jest.spyOn(jwt, "sign").mockImplementation(()=> "token")
       const token = await loginService.getToken("email", "password")
       expect(token).toBe("token")
    })
})