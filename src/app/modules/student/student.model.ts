import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';


const userNameSchema = new Schema<UserName>(
    {
        firstName: {
            type: String,
            required:true,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required:true
        }
    }
)

const guardianSchema = new Schema<Guardian>(
    {
        
    fatherName: {
    type: String,
    required: [true, "Father's name is required"],
    
    },
        
    fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
    
    },
    fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
    
  },
    motherName: {
    type: String,
    required: [true, "Mother's name is required"],
    
  },
    motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
    
  },
 
    motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
    },
  
    }
)

const localGuardianSchema = new Schema<LocalGuardian>(
    {
    name: {
    type: String,
    required: [true, "Name is required"],
    
  },
  occupation: {
    type: String,
    required: [true, "Occupation is required"],
    
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
    
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    
  },
    }
)


const studentSchema = new Schema<Student>({
    id: { type: String },
    name: userNameSchema,
    gender: ['male', 'female'],
    dateOfBirth: {
        type: String
    },
    email: {
        type: String,
        required:true
    },
    contactNumber: {
        type: String,
        required:true,
    },
    emergencyContactNumber: {
        type: String,
        required:true,
    },
    bloodGRP: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    presentAddress: {
        type: String,
        required:true,
    },
    permanentAddress: {
        type: String,
        required:true,
    },

    guardian: guardianSchema,

    localGuardian: localGuardianSchema,
    profileImage: {
        type:String
    },
    isActive:['active', 'blocked']

    
})


//create a model
export const StudentModel = model<Student>('Student',studentSchema) 