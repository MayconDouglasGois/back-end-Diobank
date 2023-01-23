import { UserService } from "../services/userService"
import { UserController } from "./UserController"
import {Request} from "express"
import { makeMokeResponse } from "../__mocks__/mockResponse.mock"




describe("userController",()=>{
    
    const mockUserService: Partial<UserService> = {
        createUser : jest.fn(),
        getUser : jest.fn().mockReturnValue({
            name: "maycon",
            email: "teste@gmail.com",
            user_id: "123"
        }),
        deleteUser: jest.fn()
    }
    
    const userController = new UserController(mockUserService as UserService)

    it("Deve adicionar um usuario",async ()=>{

        const mockRequest = {
            body: {
                name: "maycon",
                email: "teste@gmail.com",
                password: "123"
            } 
        } as Request

        const mockResponse = makeMokeResponse()
       await userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({"Success": "User created"})
    })

    it("Não deve adicionar um usuario sem um name valido",async ()=>{
        
        const mockRequest = {
            body: {
                name: "",
                email: "teste@gmail.com",
                password: "1234"
            } 
        } as Request
        const mockResponse = makeMokeResponse()
        await userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(404)
        expect(mockResponse.state.json).toMatchObject({messeger : "bad Request! data not found"})
    })

    it("Não deve adicionar um usuario sem um email valido",()=>{
        
        const mockRequest = {
            body: {
                name: "maycon",
                email: "",
                password:"123"
            } 
        } as Request
        const mockResponse = makeMokeResponse()
        userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(404)
        expect(mockResponse.state.json).toMatchObject({messeger : "bad Request! data not found"})
    })

    it("Não deve adicionar um usuario sem um password valido",async ()=>{
        
        const mockRequest = {
            body: {
                name: "maycon",
                email: "teste@mail.com",
                password:""
            } 
        } as Request
        const mockResponse = makeMokeResponse()
        await userController.createUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(404)
        expect(mockResponse.state.json).toMatchObject({messeger : "bad Request! data not found"})
    })


    it("Deve retornar um objeto com o user referente ao id informado",async ()=>{

        const mockRequest = {
            body: {
                user_id: "123"
            } 
        } as Request
        const mockResponse = makeMokeResponse()
        await userController.getUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({
            name: "maycon",
            email: "teste@gmail.com",
            user_id: "123"
        })
    })

    it("Dereve deletar o usuario",()=>{
        
        const mockRequest = {
            body: {
                name: "maycon",
                email: "teste@gmail.com"
            } 
        } as Request
        const mockResponse = makeMokeResponse()
        userController.deleteUser(mockRequest,mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({"Success": "User deleted"})
    })
    
})
