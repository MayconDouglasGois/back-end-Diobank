import { Router, Response, Request } from "express"
import { UserController } from "./controller"

const route = Router()
 
 
route.get('/', (req: Request, res: Response) => {
    UserController.getUser(req,res) 
})
 
route.post('/', (req: Request, res: Response) => {
    UserController.createUser(req,res) 
})
 
route.delete('/', (req: Request, res: Response) => {
    UserController.deleteUser(req,res) 
})

export default route