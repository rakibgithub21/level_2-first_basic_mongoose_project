import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app : Application= express()


//parser 
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/v1/students',StudentRoutes)
    
const getAController = (req:Request, res:Response) => {
  res.send('Hello World! here is my first project with mongose')
}

app.get('/',getAController )

console.log(process.cwd());

export default app;