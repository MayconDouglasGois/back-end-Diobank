import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock"
import { UserRepository } from './UserRepository';
import { User } from './../entities/User';
import { EntityManager } from 'typeorm';

describe("UserRepository",()=>{
    let userRespository: UserRepository
    let managerMock: Partial<EntityManager>
    const mockUser: User = {
        user_id : "123",
         name: "name",
         email: "email", 
        password: "password" 
    }
    
    beforeAll(async () =>{
        managerMock = await getMockEntityManager({
            saveReturn : mockUser,
            findOne: mockUser
        })
        
        userRespository = new UserRepository(managerMock as EntityManager)
    })

    it("desever cadastrar um novo usuario no banco de dados", async ()=>{
       const response = await userRespository.CreateUser(mockUser)
        expect(managerMock.save).toHaveBeenCalled()
        expect(response).toMatchObject(mockUser)
    })
    
    it("desever cadastrar um novo usuario no banco de dados", async ()=>{
        const response = await userRespository.getUser("123")
         expect(managerMock.findOne).toHaveBeenCalled()
         expect(response).toMatchObject(mockUser)
     })
})