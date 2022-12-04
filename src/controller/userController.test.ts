import { userService } from "../services/userService"
import { userController } from "./userController"
import {Request} from "express"
import { makeMokeResponse } from "../__mocks__/mockResponse.mock"




describe("userController",()=>{
    
    const mockUserService: Partial<userService> = {
        createUser : jest.fn(),
        getUser : jest.fn().mockReturnValue([{
            name: "maycon",
            email: "teste@gmail.com"
        } ]),
        deleteUser: jest.fn()
    }
    
    const UserController = new userController(mockUserService as userService)

    it("Deve adicionar um usuario",()=>{

        const mockRequest = {
            body: {
                name: "maycon",
                email: "teste@gmail.com"
            } 
        } as Request

        const mockResponse = makeMokeResponse()
        UserController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({"Success": "User created"})
    })

    it("Não deve adicionar um usuario sem um name valido",()=>{
        
        const mockRequest = {
            body: {
                name: "",
                email: "teste@gmail.com"
            } 
        } as Request
        const mockResponse = makeMokeResponse()
        UserController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(404)
        expect(mockResponse.state.json).toMatchObject({"Error": "name does not exist"})
    })

    it("Não deve adicionar um usuario sem um email valido",()=>{
        
        const mockRequest = {
            body: {
                name: "maycon",
                email: ""
            } 
        } as Request
        const mockResponse = makeMokeResponse()
        UserController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(404)
        expect(mockResponse.state.json).toMatchObject({"Error": "email does not exist"})
    })


    it("Deve retornar o array com o users",()=>{

        const mockRequest = {} as Request
        const mockResponse = makeMokeResponse()
        UserController.getUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject([{
            name: "maycon",
            email: "teste@gmail.com"
        }])
    })

    it("Deve retornar o array com o users",()=>{

        const mockRequest = {} as Request
        const mockResponse = makeMokeResponse()
        UserController.getUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject([{
            name: "maycon",
            email: "teste@gmail.com"
        }])
    })

    it("Dereve deletar o usuario",()=>{
        
        const mockRequest = {
            body: {
                name: "maycon",
                email: "teste@gmail.com"
            } 
        } as Request
        const mockResponse = makeMokeResponse()
        UserController.deleteUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({"Success": "User deleted"})
    })
    
})
