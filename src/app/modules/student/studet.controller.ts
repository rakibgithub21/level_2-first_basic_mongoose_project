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


const getAllStudents = async (req:Request, res:Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDb()
        res.status(200).json({
        success: true,
        message: 'Student are retrieved successfully',
        data:result
    })
        
    } catch (err) {
        console.log(err);
    }
}

const getSingleStudents = async (req:Request, res:Response) => {
    try {
        const {stdId} = req.params
        const result = await StudentServices.getSingleStudentsFromDb(stdId)
        res.status(200).json({
        success: true,
        message: 'Student are retrieved successfully',
        data:result
    })
        
    } catch (err) {
        console.log(err);
    }
}


export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudents
    
}