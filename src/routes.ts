import { Router, Response, Request } from "express"
import { userController } from "./controller"

const route = Router()
 
 
route.get('/', (req: Request, res: Response) => {
    userController.getUser(req,res) 
})
 
route.post('/', (req: Request, res: Response) => {
    userController.createUser(req,res) 
})
 
route.delete('/', (req: Request, res: Response) => {
    userController.deleteUser(req,res) 
})

route.post('/', (req: Request, res: Response) => {
    userController.createUser(req,res) 
})

export default route