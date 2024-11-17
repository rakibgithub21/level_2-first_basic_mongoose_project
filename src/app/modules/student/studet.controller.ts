import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async(req: Request, res: Response) => {

    try {
    const {student : studentData} = req.body;
    const result = await StudentServices.createStudentIntoDb(studentData)
    //send response
    res.status(200).json({
        success: true,
        message: 'Student is created successfully',
        data:result
    })
    } catch (err) {
        console.log(err);
    }
    
}


export const StudentControllers = {
    createStudent,
}