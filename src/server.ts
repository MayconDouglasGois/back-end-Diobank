import express from 'express'
import 'reflect-metadata'
import route from './routes';
import routeLogin from './routesLogin';
 
const app = express();



app.use(express.json())
 
app.use(route)
app.use("/login",routeLogin)
app.listen(3333, () => 'server running on port 3333')


