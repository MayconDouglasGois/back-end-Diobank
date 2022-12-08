import express from 'express'
import 'reflect-metadata'
import route from './routes';
 
const app = express();



app.use(express.json())
 
app.use(route)
 
app.listen(3333, () => 'server running on port 3333')


