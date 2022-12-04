import { userService } from "./userService"



describe("userService",()=>{

const mockUser = [{
    name: "name",
    email: "email"
    }]

    const UserService = new userService(mockUser)



    it("Deve criar um novo usuario",()=>{

        const mockUserData = {
            name: "maycon",
            email: "douglas"
        }
        UserService.createUser(mockUserData.name, mockUserData.email)
        expect(UserService.db).toHaveLength(2)
    })



    it("Deve retornar a lista de usuarios",()=>{
        const users = UserService.getUser()
        expect(users).toMatchObject([{"email": "email", "name": "name"}, {"email": "douglas", "name": "maycon"}])
    })


    it("Deve deletar o usuario com o nome 'name' ",()=>{
        
        UserService.deleteUser("name")
        expect(UserService.db).toHaveLength(1)
    })

})
