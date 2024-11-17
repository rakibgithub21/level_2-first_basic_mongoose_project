import { Schema, model, connect } from 'mongoose';

//type for guardian
export type Guardian = {
    fatherName: string,
    fatherOccupation: string,
    fatherContactNo: string,
    motherName: string,
    motherOccupation: string, 
    motherContactNo: string,
        
}


export type Student = {
    id:string,
    name: {
        firstName: string,
        middleName: string,
        lastName:string
    },
    gender: "male" | "female",
    dateOfBirth:string,
    email: string,
    contactNumber: string,
    emergencyContactNumber: string,
    bloodGRP?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-",
    presentAddress: string,
    permanentAddress: string,
    guardia:Guardian
}