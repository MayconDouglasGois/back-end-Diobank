

import { UserService } from '../services/userService';

describe("userService",()=>{

jest.mock("../repository/UserRepository")

const mockUserRepository = require("../repository/UserRepository")
   
const userService = new UserService(mockUserRepository)


    it("Deve criar um novo usuario",async ()=>{
        mockUserRepository.CreateUser = jest.fn().mockResolvedValue({name: "maycon",email:"teste@mail.com",password: "123"})
        const response = await userService.createUser("maycon","teste@mail.com","123")
        expect(mockUserRepository.CreateUser).toHaveBeenCalled()
        expect(response).toMatchObject({name: "maycon",email:"teste@mail.com",password: "123"})
    })

    it("Deve retornar um usuario com o user_id fornecido",async ()=>{
        mockUserRepository.getUser = jest.fn().mockResolvedValue({user_id: "123",name: "maycon",email:"teste@mail.com",password: "123"})
        const response = await userService.getUser("123")
        expect(mockUserRepository.getUser).toHaveBeenCalled()
        expect(response).toMatchObject({user_id: "123",name: "maycon",email:"teste@mail.com",password: "123"})
    })

})
