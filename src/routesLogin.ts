import { Router, Response, Request } from "express"
import { loginControler } from "./controller"


const routeLogin = Router()
 

routeLogin.post('/', (req: Request, res: Response) => {
    loginControler.login(req,res) 
})

export default routeLogin