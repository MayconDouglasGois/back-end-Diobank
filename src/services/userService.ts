import { IUser } from "../entities/IUser"

   

export class userService {


    db: IUser[]

   constructor(user: IUser[]){
        this.db = user
    }


 createUser(name: string, email: string): void {
    const user = {
        name,
        email
    }
    this.db.push(user)
 }

 getUser(){
    return this.db
 }


 deleteUser(name: string): void{
    const length = this.db.findIndex((a)=>{return a.name === name })
    this.db.splice(length,1)
 }
}